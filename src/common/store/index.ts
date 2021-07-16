import { action, makeObservable, observable, runInAction } from "mobx";
import axios, { AxiosRequestConfig } from "axios";

/** Класс для наследования стора */
export class RootStore {
  isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      makeGetRequest: action,
    });
  }

  setIsLoading = (bool: boolean) => runInAction(() => (this.isLoading = bool));

  makeGetRequest = (
    url: AxiosRequestConfig["url"],
    method: AxiosRequestConfig["method"] = "GET",
    params: AxiosRequestConfig["params"] = {},
    data?: AxiosRequestConfig["data"]
  ) => {
    this.setIsLoading(true);
    axios({
      method,
      url,
      data,
      params,
    })
      .then((response) => {
        console.log(".then", response);
      })
      .catch(() => {})
      .finally(() => {
        this.setIsLoading(false);
      });
  };
}
