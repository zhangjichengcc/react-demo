/*
 * @Author: zhangjicheng
 * @Date: 2022-07-27 14:21:35
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-08-02 00:24:39
 * @FilePath: /webpack5.0-demo/src/pages/Home/index.tsx
 */
import { FC, useEffect, useState } from 'react';
import VerificationCode, { createCode } from 'picture-verification-code';

import styles from './index.less';

const verification = new VerificationCode();

const Home: FC = () => {

  const [verificationObj, setVerificationObj] = useState({code: '', url: ''});

  function onCodeChange() {
    const code = createCode();
    const url = verification.render(code);
    setVerificationObj({code, url});
  }

  useEffect(function() {
    onCodeChange();
    console.log('loaded')
  }, [])

  return (
    <div className={styles.view}>
      <div className={styles.verification}>
        <a href='https://www.npmjs.com/package/picture-verification-code'>picture-verification-code</a>
        <p style={{marginTop: 10}}>
          <img src={verificationObj.url} />
          <span onClick={onCodeChange}>看不清，换一张</span>
        </p>
      </div>
    </div>
  )
}

export default Home;