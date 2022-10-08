/*
 * @Author: zhangjicheng
 * @Date: 2022-09-28 16:24:06
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-08 19:05:37
 * @FilePath: \webpack5.0-demo\src\components\HighLight\index.tsx
 */
import { FC, useEffect, useRef, useState } from 'react';
// import CodeSvg from '@/assets/code.svg';
// import { ReactComponent as CodeSvg } from '@/assets/code.svg';
import CodeSvg from '@/assets/code.svg';
import hljs from 'highlight.js/lib/core';
import classnames from 'classnames';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

import 'highlight.js/styles/rainbow.css';
import styles from './index.less';


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

hljs.configure({
  // 忽略未经转义的 HTML 字符
  ignoreUnescapedHTML: true
})

interface Props {
  title?: string;
  children?: string;
}

const HighLight: FC<Props> = (props) => {

  const codeDom = useRef(null);
  const preDom = useRef(null);

  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState({height: 0, opacity: 0});

  const {
    title,
    children,
  } = props;

  useEffect(function() {
    const height = preDom.current.scrollHeight;
    setStyle(open ? {
      height,
      opacity: 1,
    } : {height: 0, opacity: 0})
  }, [open])

  useEffect(function() {
    hljs.highlightElement(codeDom.current as HTMLElement)
  }, [])

  return (
    <div className={classnames(styles.codeBar)}>
      <p className={styles.header}>
        <span>{title}</span>
        <span className={styles.btn} onClick={() => setOpen(!open)}><CodeSvg /></span>
      </p>
      <pre ref={preDom} style={style} className={styles.codeContent}>
        <code className={styles.code} ref={codeDom}>{children}</code>
      </pre>
    </div>
  )
}

export default HighLight;