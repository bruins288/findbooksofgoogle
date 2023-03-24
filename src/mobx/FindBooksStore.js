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
  findBooksList = { totalBooks: 0, infoBooks: [] };
  query = "";
  searchCategory = null;
  searchFiltered = null;
  startIndex = 0;
  isAddDataLoading = false;

  status = status.WAIT;

  constructor() {
    makeObservable(this, {
      findBooksList: observable,
      query: observable,
      searchCategory: observable,
      searchFiltered: observable,
      startIndex: observable,
      status: observable,
      isAddDataLoading: observable,
      setFindBooks: action,
      setUrlSearch: action,
      setStatusWait: action,
      setStatusLoading: action,
      setStatusSuccess: action,
      setStatusError: action,
      incrementStartIndex: action,
      setDataLoading: action,
    });
  }
  setFindBooks = (apiData) => {
    this.findBooksList = apiData;
  };
  setUrlSearch(
    query,
    startIndex = 0,
    searchCategory = null,
    searchFiltered = null
  ) {
    this.query = query;
    this.startIndex = startIndex;
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

  incrementStartIndex() {
    this.startIndex += 1;
  }
  setDataLoading(isLoading) {
    console.log(isLoading);
    this.isAddDataLoading = isLoading;
  }
  getFindBooksAsync = async () => {
    const dataAPI = new FindBooksAPI(
      this.query,
      this.startIndex,
      this.searchCategory,
      this.searchFiltered
    );
    try {
      this.setStatusLoading();
      const data = await dataAPI.fetchFindBooksAsyncAwait();
      runInAction(() => {
        if (!this.isAddDataLoading) {
          this.findBooksList = data;
        } else {
          this.findBooksList.infoBooks = [
            ...this.findBooksList.infoBooks,
            ...data.infoBooks,
          ];
        }
      });
      this.setStatusSuccess();
      this.setDataLoading(false);
    } catch (error) {
      console.log(error.message);
      this.setStatusError();
    }
  };
}
