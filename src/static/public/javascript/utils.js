/*
 * @Author: zhangjicheng
 * @Date: 2022-04-21 18:41:56
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-04-21 18:43:41
 * @FilePath: \ejs-portfolio\src\public\javascripts\utils.js
 */

/**
 * 格式化日期，英文格式
 * @param {*} str 
 * @returns 
 */
 function displayDataEN(str) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return str.replace(/(\d+)[-\|](\d+)[-\|](\d+)/, function($0, $1, $2, $3) {
    const month = months[Number($2) - 1];
    return `${month} ${$3}, ${$1}`;
  })
}

/**
 * 复制字符串到剪切板
 * @param {*} text 
 * @returns 
 */
 function clipboard(text) {
  return new Promise((resolve, reject) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function(res) {
          resolve(res)
        }, function(err) {
          reject(err)
        });
      } else {
        const input = document.createElement('input');
        input.id = 'copyToClipboard_input';
        input.value = text;
        document.body.appendChild(input);
        input.select();
        const res = document.execCommand('copy');
        document.body.removeChild(input);
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }
  })
}

export {
  displayDataEN,
  clipboard,
}