/*
 * @Author: zhangjicheng
 * @Date: 2022-08-01 10:28:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-10 18:06:24
 * @FilePath: \react-demo\src\pages\UseContext\index.tsx
 */
import { FC } from 'react';
import PageHead from '@components/PageHead';
import PageInfo from '@components/PageInfo';
import PageDemo from '@/components/PageDemo';
import HighLight from '@/components/HighLight';
import StaticContext from './StaticContext';
import ActiveContext from './ActiveContext';

const Demo: FC = () => {

  return <div>
    <PageHead>useContext</PageHead>
    <PageInfo>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</PageInfo>
    
    <PageDemo title="静态 context">
      通过 `useContext` 实现数据跨级传递
      <HighLight>
        {`
          /** context.ts */

          import { createContext } from 'react';

          const defaultTheme = {
            theme: 'light',
          }

          const Context = createContext(defaultTheme);

          export default Context;

          export {
            defaultTheme,
          }

          /* ---------------------------------------------------------------- */




          /** Child.tsx */

          import { FC, useContext } from 'react';
          import Context from './context';

          import styles from '../index.less';

          const Child: FC = () => {

            const value = useContext(Context);
            const {
              theme
            } = value;

            return (
              <div className={styles[theme]}>
                <p>Theme: {theme}</p>
              </div>
            )
          }

          export default Child;

          /* ---------------------------------------------------------------- */



          /** index.tsx */

          import { FC } from 'react';
          import Child from './Child';

          import Context, { defaultTheme } from './context';

          const StaticContext: FC = () => {

            return <>
              <Context.Provider value={defaultTheme}>
                <Child />
              </Context.Provider>
            </>
          }

          export default StaticContext;
          
        `}
      </HighLight>
      <StaticContext />
    </PageDemo>

    <PageDemo title="动态 context">
      useContext + useReducer 实现动态 context
      <HighLight>
        {`
          /** context.ts */

          import { createContext } from 'react';

          type State = {
            theme: 'light' | 'dark',
            language: 'en' | 'zh',
            dispatch?: (action: Action) => void,
          }
          
          type Action = {
            type: 'themeToggle' | 'languageToggle',
            payload: State['theme'] | State['language'],
          }
          
          export const defaultTheme: State = {
            theme: 'light',
            language: 'zh',
          }
          
          export function reducer(state: State, action: Action) {
            switch(action.type) {
              case 'themeToggle':
                return {
                  ...state,
                  theme: action.payload as State['theme'],
                }
              case 'languageToggle':
                return {
                  ...state,
                  language: action.payload as State['language'],
                }
              default:
                return state;
            }
          }
          
          const Context = createContext(defaultTheme);
          
          export default Context;

          /* ---------------------------------------------------------------- */



          /** Child.tsx */

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

          /* ---------------------------------------------------------------- */



          /** ActiveContext.tsx */

          import { FC, useReducer } from 'react';
          import Child from './Child';

          import Context, { defaultTheme, reducer } from './context';

          const StaticContext: FC = () => {

            const [state, dispatch] = useReducer(reducer, defaultTheme)

            return <>
              <Context.Provider value={{...state, dispatch}}>
                <Child />
              </Context.Provider>
            </>
          }

          export default StaticContext;
        `}
      </HighLight>
      <ActiveContext />
    </PageDemo>

  </div>
}

export default Demo;