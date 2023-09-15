import NewCounter from "./component/New/index.js";
import OldCounter from "./component/Old/index.js";
import React, { useState, useRef } from "react";

function App() {
  const [bol, setBol] = useState(true);
  const oldRef = useRef();
  const [newCount, setNewCount] = useState(0);
  return (
    <>
      <NewCounter
        count={newCount}
        propsOnClick={() => {
          setNewCount(newCount + 1);
        }}
      >
        {bol && <OldCounter ref={oldRef} />}
      </NewCounter>

      <button
        style={{ marginLeft: "30px" }}
        onClick={() => {
          setBol(!bol);
        }}
      >
        {bol ? "隐藏react16计数器" : "展示rect16计数器"}
      </button>
      <button
        style={{ marginLeft: "30px" }}
        onClick={() => {
          console.log(
            `当前计数器的和为${
              (oldRef.current ? oldRef.current.count : 0) + newCount
            }`
          );
        }}
      >
        计算和
      </button>
    </>
  );
}

export default App;
