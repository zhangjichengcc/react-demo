import { FC, useRef } from "react";
import Demo, { type ChildComponentProps } from "./Demo";

const UseImperativeHandle: FC = () => {
  const demoRef = useRef<ChildComponentProps>(null);

  function onHandleClick() {
    demoRef.current.handleClick();
  }

  return (
    <div>
      <h2 onClick={onHandleClick}>parent</h2>
      <Demo ref={demoRef} title="child" />
    </div>
  );
};

export default UseImperativeHandle;
