/*
 * @Author: zhangjicheng
 * @Date: 2022-07-18 16:36:19
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-21 00:16:27
 * @FilePath: /webpack5.0-demo/src/index.ts
 */

import { FC } from 'react';
console.log("Hello World!");


type VerificationCodeProps = [
  code: string,
  width?: number,
  height?: number
]
class VerificationCode {
  code: string[];
  size: number;
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(...props: VerificationCodeProps) {
    const [ code, width = 100, height = 40 ] = props;
    this.code = code.split('');
    this.size = height - 14 || 16;
    this.width = Math.max(width, this.size * this.code.length);
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.cursor = "pointer";
    this.canvas.innerHTML = "<span style='color: red'>你的浏览器不支持canvas</span>";
    // 设置默认背景色，随机背景
    this.ctx.fillStyle = this.randomColor(180, 240);
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  /**
   * 获取随机值
   * @param min 范围最小值
   * @param max 范围最大值
   * @returns 随机值
   */
  randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * 随机颜色
   * @param min 范围最小值
   * @param max 范围最大值
   * @returns 随机颜色
   */
  randomColor(min: number, max: number) {
    let r = this.randomNum(min, max),
      g = this.randomNum(min, max),
      b = this.randomNum(min, max);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  // setBgImg(url) {
  //   function getBase64Image(img) {
  //     var canvas = document.createElement("canvas");
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0, img.width, img.height);
  //     var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
  //     var dataURL = canvas.toDataURL("image/"+ext);
  //     return dataURL;
  //   }
  //   let imgs = document.createElement('img');
  //   // 1. 增加 crossOrigin 属性，值为 anonymous
  //   // 含义：执行一个跨域请求，在请求头里加 origin 字段
  //   // 2. 后端要返回 Access-Control-Allow-Origin 响应头来允许跨域
  //   // imgs.crossOrigin = 'anonymous'
  //   // imgs.src = url
  //   this.ctx.drawImage(getBase64Image(url), 0, 0, this.width, this.height);
  //   return this;
  // }

  setBgColor(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
    return this;
  }

  create() {
    const ctx = this.ctx;
    ctx.textBaseline = "middle";
    const widthSpace = this.width / (this.code.length + 1);
    const y = this.height / 2;
    this.code.forEach((value, idx) => {
      ctx.font = this.randomNum(this.height / 2, this.height) + "px SimHei";
      ctx.fillStyle = this.randomColor(50, 160); // 字体颜色
      ctx.shadowOffsetX = this.randomNum(-3, 3); // 左右阴影偏移
      ctx.shadowOffsetY = this.randomNum(-3, 3); // 上下阴影偏移
      ctx.shadowBlur = this.randomNum(-3, 3); // 阴影模糊级别
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)"; // 阴影颜色
      let x = widthSpace * (idx + 0.5);
      ctx.translate(x, y);
      ctx.fillText(value, 0, 0);
      ctx.translate(-x, -y);
    })
    return this.canvas.toDataURL('image/jpeg', 1);
  }
}

document.