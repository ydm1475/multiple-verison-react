import React from "react";
import "./index.css";

function Counter({ children, count, propsOnClick }) {
  return (
    <div className="wrap">
      <h3>React18计数器</h3>
      <div>
        当前计数：{count}
        <button onClick={propsOnClick}>点击增加计数</button>
      </div>

      {children && <div className="subItem">{children}</div>}
    </div>
  );
}

export default Counter;
