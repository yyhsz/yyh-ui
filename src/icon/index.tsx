/*
 * @Author: your name
 * @Date: 2021-10-27 14:04:49
 * @LastEditTime: 2021-10-27 15:32:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-ui\src\icon\index.tsx
 */
import React from "react";
import classnames from "classnames";

import svgArr from "../icons/index";
import styled from "./index.module.scss";

// import Svg from "../icons/baidu.svg";
// import { ReactComponent as Pay } from "../icons/wechat.svg";

// console.log(wechat);
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  // onClick: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = ({
  name = "wechat",
  className = "",
  ...restProps
}) => {
  const Svg = svgArr[name]; //
  return <Svg className={classnames(styled.icon, className)} {...restProps} />;
};

export default Icon;



