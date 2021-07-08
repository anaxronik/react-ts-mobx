import { observer } from "mobx-react";
import React, { useEffect } from "react";
import store from "./store";

const Main: React.FC = () => {
  useEffect(() => {
    console.log("useEffect", store.isLoading);
  }, []);

  return (
    <div>
      <h1>HEADER HERE</h1>
    </div>
  );
};

export default observer(Main);
