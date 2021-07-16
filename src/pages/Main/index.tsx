import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "./store";

const Main: React.FC = () => {
  useEffect(() => {
    console.log("useEffect");
    store.getUser();
  }, []);

  if (store.isLoading) return <h1>Loadinf</h1>;
  return (
    <div>
      <h1>HEADER HERE</h1>
      <div>id = {store.user.id}</div>
      <div>completed = {store.user.completed ? "yes" : "no"}</div>
      <div>title = {store.user.title}</div>
      <div>userId = {store.user.userId}</div>
    </div>
  );
};

export default observer(Main);
