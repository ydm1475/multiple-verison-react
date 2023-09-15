import ReactDOM, { unmountComponentAtNode } from "react-dom-16";
import { useRef, useEffect, forwardRef, memo } from "react";

export default function withRender(Component) {
  return memo(
    forwardRef((_, ref) => {
      var containerRef = useRef();
      useEffect(() => {
        if (containerRef.current) {
          ReactDOM.render(<Component ref={ref} />, containerRef.current);
        }

        return () => {
          if (containerRef.current) {
            unmountComponentAtNode(containerRef.current);
          }
          ref.current = undefined;
        };
      }, []);

      return <div ref={containerRef} id="react16"></div>;
    })
  );
}
