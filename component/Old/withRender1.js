import ReactDOM, { unmountComponentAtNode } from "react-dom-16";
import { useRef, useEffect, forwardRef, memo, useLayoutEffect } from "react";

export default function withRender(Component) {
  return memo(
    forwardRef((_, ref) => {
      var containerRef = useRef();
      var memoRef = useRef();

      function load() {
        memoRef.current = containerRef.current;

        ReactDOM.render(<Component ref={ref} />, containerRef.current);
      }

      useEffect(() => {
        load(containerRef.current);

        return () => {
          unmountComponentAtNode(memoRef.current);
          memoRef.current = undefined;
        };
      }, []);

      return <div ref={containerRef} id="react16"></div>;
    })
  );
}
