import {
  action,
  configure,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import FindBooksAPI from "../dal/FindBooksAPI";
configure({ enforceActions: "observed" });

export default class FindBooksStore {
  findBooksList = {};
  query = "";
  searchCategory = null;
  searchFiltered = null;

  constructor() {
    makeObservable(this, {
      findBooksList: observable,
      query: observable,
      searchCategory: observable,
      searchFiltered: observable,
      setFindBooks: action,
      setUrlSearch: action,
    });
  }
  setFindBooks = (apiData) => {
    this.findBooksList = apiData;
  };
  setUrlSearch(query, searchCategory = null, searchFiltered = null) {
    this.query = query;
    this.searchCategory = searchCategory;
    this.searchFiltered = searchFiltered;
  }
  getFindBooksAsync = async () => {
    const dataAPI = new FindBooksAPI(
      this.query,
      this.searchCategory,
      this.searchFiltered
    );
    const data = await dataAPI.fetchFindBooksAsyncAwait();
    runInAction(() => {
      this.findBooksList = data;
    });
  };
}
