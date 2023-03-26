import {
  action,
  configure,
  makeObservable,
  observable,
  override,
  runInAction,
} from "mobx";
import AsyncStatusLoad from "./AsyncStatusLoad";

import BooksAPI from "../dal/BooksAPI";

configure({ enforceActions: "observed" });

export default class BooksStore extends AsyncStatusLoad {
  constructor() {
    super();
    this.booksList = { total: 0, info: [] };
    this.book = {};
    this.query = "";
    this.searchCategory = null;
    this.searchOrderBy = null;
    this.startIndex = 0;
    this.isMoreLoading = false;
    makeObservable(this, {
      booksList: observable,
      query: observable,
      searchCategory: observable,
      searchOrderBy: observable,
      startIndex: observable,
      isMoreLoading: observable,
      setBook: action,
      setBooks: action,
      setUrlSearch: action,
      setStatusWait: override,
      setStatusLoading: override,
      setStatusSuccess: override,
      setStatusError: override,
      incrementStartIndex: action,
      setMoreLoading: action,
      getBookById: action,
    });
  }
  setBooks = (apiData) => {
    this.booksList = apiData;
  };
  setBook = (apiData) => {
    this.book = apiData;
  };
  setUrlSearch(
    query,
    searchCategory = null,
    searchOrderBy = null,
    startIndex = null
  ) {
    this.query = query;
    this.searchCategory = searchCategory;
    this.searchOrderBy = searchOrderBy;
    this.startIndex = startIndex;
  }
  incrementStartIndex() {
    this.startIndex += 1;
  }
  setMoreLoading(isLoading) {
    this.isMoreLoading = isLoading;
  }
  getBookById(id) {
    return this.booksList.info.find((book) => book.id === id);
  }
  getBooksAsyncAwait = async () => {
    BooksAPI.setSearchUrlParamsAPI(
      this.query,
      this.searchCategory,
      this.searchOrderBy,
      this.startIndex
    );
    try {
      super.setStatusLoading();
      const data = await BooksAPI.fetchBooksAsyncAwaitAPI();
      runInAction(() => {
        if (!this.isMoreLoading) {
          this.booksList = data;
        } else {
          this.booksList.info = [...this.booksList.info, ...data.info];
        }
      });
      if (this.booksList.total <= this.booksList.info.length) {
        throw new Error("finished");
      }
      if (this.booksList.total === undefined) {
        throw new Error("not found");
      }

      super.setStatusSuccess();
      this.setMoreLoading(false);
    } catch (error) {
      if (error.message === "finished") super.setStatusFinish();
      else super.setStatusError();
    }
  };
  getBookByIdAsyncAwait = async (id) => {
    try {
      super.setStatusLoading();
      const data = await BooksAPI.fetchBookByIdAsyncAwaitAPI(id);
      runInAction(() => {
        this.setBook(data);
      });
      super.setStatusSuccess();
    } catch (error) {
      console.log(error.message);
      super.setStatusError();
    }
  };
}
