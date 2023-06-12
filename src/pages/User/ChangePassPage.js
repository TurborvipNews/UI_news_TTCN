import React from "react";
import { useStore } from "../store";
import ChangePass from "../component/ChangePass/ChangePass";

function ChangePassPage() {
  const [state] = useStore();
  return (
    <div className="App">
      <>
        <ChangePass />
      </>
    </div>
  );
}

export default ChangePassPage;
