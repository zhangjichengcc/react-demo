import { FC } from "react";

import styles from "index.less";

const Page: FC<{ num: number }> = (props) => {
  const { num } = props;

  return (
    <div>
      <h1>Page {num}</h1>
    </div>
  );
};

const Carousel: FC = () => {
  return (
    <div>
      <Page num={1} />
      <Page num={2} />
      <Page num={3} />
    </div>
  );
};

export default Carousel;
