import { runInAction } from "mobx";
import { RootStore } from "../../../common/store";

class MainStore extends RootStore {
  user = {
    completed: undefined,
    id: undefined,
    title: undefined,
    userId: undefined,
  };

  getUser = () => {
    this.makeGetRequest(
      "https://jsonplaceholder.typicode.com/photos",
      "post",
      {
        page: 1,
        pageSize: 20,
      },
      { name: "name", number: 1 }
    );
  };
}

export default new MainStore();
