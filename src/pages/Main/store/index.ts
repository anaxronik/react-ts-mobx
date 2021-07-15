import { runInAction } from "mobx";

/** Класс для наследования стора */
class RootStore {
  isLoading: boolean = false;

  setIsLoading = (bool: boolean) => runInAction(() => (this.isLoading = bool));

  makeRequest = async () => {
    try {
      this.setIsLoading(true);
    } catch (error) {
      throw new Error("Error in makeRequest");
    } finally {
      this.setIsLoading(false);
    }
  };
}

class Store extends RootStore {}

class Api {
  getRequest() {}
  postRequest() {}
}

class UserApi extends Api {
  // CRUD methodss api
  create() {}
  getById() {}
  getList() {}
  edit() {}
  delete() {}
}
