/*
 * @Author: zhangjicheng
 * @Date: 2022-07-21 00:14:09
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-10-08 17:10:08
 * @FilePath: \webpack5.0-demo\typings.d.ts
 */
// declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module '*.less';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
