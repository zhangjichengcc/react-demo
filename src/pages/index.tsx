/*
 * @Author: zhangjicheng
 * @Date: 2022-07-25 17:04:42
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-27 00:19:16
 * @FilePath: /webpack5.0-demo/src/pages/index.tsx
 */
import { FC, useEffect, useState } from 'react';
import VerificationCode, { createCode } from 'picture-verification-code';

import styles from './index.less';

const verification = new VerificationCode();

const Index: FC = () => {

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

  return <div className={styles.view}>
    <div>
      <p>
        <img src={verificationObj.url} />
        <span onClick={onCodeChange}>看不清，换一张</span>
      </p>
    </div>
  </div>
}

export default Index;