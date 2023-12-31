import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react-16";

import withRender from "./withRender1";
import "./index.css";

const Counter = forwardRef((_, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    count,
  }));

  useEffect(() => {
    var timer = setInterval(() => {
      console.log(1111);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div ref={ref}>
      <h3>React16计数器</h3>
      <div>
        当前计数：{count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          点击增加计数
        </button>
      </div>
    </div>
  );
});
export default withRender(Counter);
