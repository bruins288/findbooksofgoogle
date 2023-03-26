import { action, configure, makeObservable, observable } from "mobx";
import { status } from "../utils/data";

configure({ enforceActions: "observed" });

export default class AsyncStatusLoad {
  constructor() {
    this.status = status.WAIT;
    makeObservable(this, {
      status: observable,
      setStatusWait: action,
      setStatusLoading: action,
      setStatusSuccess: action,
      setStatusError: action,
    });
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
}
