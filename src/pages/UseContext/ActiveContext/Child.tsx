/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 11:39:13
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-01 19:11:17
 * @FilePath: \webpack-demo\src\pages\UseContext\ActiveContext\Child.tsx
 */
import { FC, useContext } from 'react';
import Context from './context';

import styles from '../index.less';

const Child: FC = () => {

  const value = useContext(Context);
  const {
    theme,
    language,
    dispatch,
  } = value;

  function toggleTheme() {
    dispatch({type: 'themeToggle', payload: theme === 'dark' ? 'light' : 'dark'});
  }

  function toggleLan() {
    dispatch({type: 'languageToggle', payload: language === 'en' ? 'zh' : 'en'});
  }

  return (
    <div className={styles[theme]}>
      <p>{{en: 'Theme', zh: '主题'}[language]}: {theme}</p>
      <button onClick={toggleTheme}>toggle Theme</button>
      <button onClick={toggleLan}>toggle Language</button>
    </div>
  )
}

export default Child;