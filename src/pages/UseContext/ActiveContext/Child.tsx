/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 11:39:13
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 00:06:45
 * @FilePath: /webpack5.0-demo/src/pages/UseContext/ActiveContext/Child.tsx
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
      <button style={{display: 'block'}} onClick={toggleTheme}>
        {{en: 'toggle Theme', zh: '切换主题'}[language]}
      </button>
      <button onClick={toggleLan}>
        {{en: 'toggle Language', zh: '切换语言'}[language]}
      </button>
    </div>
  )
}

export default Child;