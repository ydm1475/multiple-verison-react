import ReactDOM, { unmountComponentAtNode } from "react-dom-16";
import { useRef, useEffect, forwardRef, memo, useLayoutEffect } from "react";

export default function withRender(Component) {
  return memo(
    forwardRef((_, ref) => {
      var containerRef = useRef();

      // useLayoutEffect的destory在DOM 更新之前，需要手动调用unmountComponentAtNode， 触发副作用的卸载
      useLayoutEffect(() => {
        return () => {
          if (containerRef.current) {
            unmountComponentAtNode(containerRef.current);
          }
        };
      }, []);

      useEffect(() => {
        if (containerRef.current) {
          ReactDOM.render(<Component ref={ref} />, containerRef.current);
        }
      }, []);

      return <div ref={containerRef} id="react16"></div>;
    })
  );
}
