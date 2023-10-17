import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./index.less";

const Flip: FC<any> = (props) => {
  const { children } = props;

  console.log(666);

  return <div className={styles.flip}>{children}</div>;
};

const FlipContent: FC = () => {
  const contentRef = useRef(null);
  const dragStartIndex = useRef(null);
  const dragEnterIndex = useRef(null);
  const [draggable, setDraggable] = useState(true);
  const [list, setList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  function onHandleDragStart(e) {
    if (!draggable) return;
    const children = contentRef.current.children;
    dragStartIndex.current = [...children].indexOf(e.target);
  }

  function onHandleDragEnter(e) {
    e.preventDefault();
    if (!draggable) return;
    const children = contentRef.current.children;
    const _dragEnterIndex = [...children].indexOf(e.target);
    if (dragEnterIndex.current === _dragEnterIndex) {
      return;
    }
    dragEnterIndex.current = _dragEnterIndex;
    if (
      dragEnterIndex.current >= 0 &&
      dragEnterIndex.current !== dragStartIndex.current
    ) {
      console.log(dragEnterIndex.current);
      move();
    }
  }

  function onHandleDragOver(e) {
    e.preventDefault();
    console.log("over");
  }

  function move() {
    const newList = [...list];
    const item = newList.splice(dragStartIndex.current, 1);
    newList.splice(dragEnterIndex.current, 0, item[0]);
    setList(newList);
  }

  // 每次列表变化时，更新dragEnterIndex.current
  useEffect(() => {
    dragStartIndex.current = dragEnterIndex.current;
  }, [list]);

  /** ----------------------------------------------------------------------- */

  function initRect() {
    const children = contentRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const dom = children[i];
      const rect = dom.getBoundingClientRect();
      dom.setAttribute("data-firstX", rect.x);
      dom.setAttribute("data-firstY", rect.y);
    }
  }

  function setLastRect() {
    const children = contentRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const dom: HTMLDivElement = children[i];
      const rect = dom.getBoundingClientRect();
      dom.setAttribute("data-lastX", "" + rect.x);
      dom.setAttribute("data-lastY", "" + rect.y);
      // dom.appendChild(document.createElement("<span>aa</span>"));
    }
  }

  function animate() {
    console.log("animate");
    function move(dom, invert) {
      const { x, y } = invert;
      setDraggable(false);
      dom.setAttribute("draggable", false);
      dom.animate(
        [
          { transform: `translate3d(${x}px, ${y}px, 0)` },
          { transform: "translate3d(0, 0, 0)" },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          // fill: "forwards",
        }
      );
    }
    const children = contentRef.current.children;
    for (let i = 0; i < children.length; i++) {
      const dom = children[i];
      const rect = dom.getBoundingClientRect();
      const x = parseFloat(dom.getAttribute("data-firstX")) - rect.x;
      const y = parseFloat(dom.getAttribute("data-firstY")) - rect.y;
      move(dom, { x, y });
      dom.setAttribute("data-firstX", rect.x);
      dom.setAttribute("data-firstY", rect.y);
    }
    setTimeout(() => {
      setDraggable(true);
    }, 500);
    // initRect();
  }

  useEffect(() => {
    initRect();
  }, []);

  // useLayoutEffect(() => {
  //   console.log("list change");
  //   // setLastRect();
  //   // invert();

  //   animate();
  // }, [list]);

  useEffect(() => {
    // 先更新DOM
    // initRect();

    // 在下一次浏览器渲染时执行动画
    requestAnimationFrame(() => {
      animate();
    });
  }, [list]);

  function onPop() {
    setList(function (pre) {
      return pre.slice(1).concat(pre[0]);
    });
  }

  function onPush() {
    setList(function (pre) {
      return pre.slice(-1).concat(pre.slice(0, pre.length - 1));
    });
  }

  return (
    <Flip>
      <button onClick={onPop}>pop</button>
      <button onClick={onPush}>push</button>
      <div
        ref={contentRef}
        className={styles.content}
        onDragStart={onHandleDragStart}
        onDragEnter={onHandleDragEnter}
        // onDrag
        // 阻止拖拽结束后，拖拽项回到原始位置
        onDragOver={onHandleDragOver}
      >
        {list.map((item) => (
          <div draggable={draggable} key={item}>
            {item}
          </div>
        ))}
      </div>
    </Flip>
  );
};

export default FlipContent;

//position z-index
