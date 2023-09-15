import ReactDOM from "react-dom-16";
import { useRef, useEffect, forwardRef, memo } from "react";

export default function withRender(Component) {
  return memo(
    forwardRef((_, ref) => {
      var containerRef = useRef();
      console.log("0000");
      useEffect(() => {
        if (containerRef.current) {
          ReactDOM.render(<Component ref={ref} />, containerRef.current);
        }
      }, []);

      return <div ref={containerRef} id="react16"></div>;
    })
  );
}
