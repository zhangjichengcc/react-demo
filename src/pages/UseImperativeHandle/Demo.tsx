import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

export interface ChildComponentProps {
  /** 点击方法 */
  handleClick: () => void;
}
interface Props {
  /** 子组件标题 */
  title: string;
}

const Demo: ForwardRefRenderFunction<ChildComponentProps, Props> = (
  props,
  ref
) => {
  const [count, setCount] = useState(0);
  const { title } = props;

  function handleClick() {
    setCount(count + 1);
  }

  useImperativeHandle(ref, () => {
    return {
      handleClick,
    };
  });

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>add</button>
      <h2>count: {count}</h2>
    </div>
  );
};

export default forwardRef(Demo);
