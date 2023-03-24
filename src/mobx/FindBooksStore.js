import {
  action,
  configure,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import FindBooksAPI from "../dal/FindBooksAPI";
configure({ enforceActions: "observed" });

export const status = {
  WAIT: "wait",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default class FindBooksStore {
  findBooksList = {};
  query = "";
  searchCategory = null;
  searchFiltered = null;
  status = status.WAIT;

  constructor() {
    makeObservable(this, {
      findBooksList: observable,
      query: observable,
      searchCategory: observable,
      searchFiltered: observable,
      status: observable,
      setFindBooks: action,
      setUrlSearch: action,
      setStatusWait: action,
      setStatusLoading: action,
      setStatusSuccess: action,
      setStatusError: action,
    });
  }
  setFindBooks = (apiData) => {
    this.findBooksList = apiData;
  };
  setUrlSearch(query, searchCategory = null, searchFiltered = null) {
    this.query = query + "+" + searchCategory;
    this.searchCategory = searchCategory;
    this.searchFiltered = searchFiltered;
  }
  setStatusWait() {
    this.status = status.WAIT;
  }
  setStatusLoading() {
    this.status = status.LOADING;
  }
  setStatusSuccess() {
    this.status = status.SUCCESS;
  }
  setStatusError() {
    this.status = status.ERROR;
  }

  getFindBooksAsync = async () => {
    const dataAPI = new FindBooksAPI(
      this.query,
      this.searchCategory,
      this.searchFiltered
    );
    try {
      this.setStatusLoading();
      const data = await dataAPI.fetchFindBooksAsyncAwait();
      runInAction(() => {
        this.findBooksList = data;
      });
      this.setStatusSuccess();
    } catch (error) {
      console.log(error.message);
      this.setStatusError();
    }
  };
}
