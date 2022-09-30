/*
 * @Author: zhangjicheng
 * @Date: 2022-09-28 16:24:06
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-09-30 18:55:47
 * @FilePath: \webpack5.0-demo\src\components\HighLight\index.tsx
 */
import { FC, useEffect, useRef } from 'react';
// import CodeSvg from '@/assets/code.svg';
import { ReactComponent as CodeSvg } from '@/assets/code.svg';
import hljs from 'highlight.js/lib/core';
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
  children?: string;
}

const HighLight: FC<Props> = (props) => {

  const codeDom = useRef(null);
  const preDom = useRef(null);

  const {
    children
  } = props;

  useEffect(function() {
    hljs.highlightElement(codeDom.current as HTMLElement)
  }, [])

  return (
    <pre ref={preDom}>
      <p><CodeSvg /></p>
      <code className={styles.code} ref={codeDom}>{children}</code>
    </pre>
  )
}

export default HighLight;