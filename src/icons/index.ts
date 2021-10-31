/*
 * @Author: your name
 * @Date: 2021-10-27 15:06:16
 * @LastEditTime: 2021-10-27 15:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-ui\src\icons\index.ts
 */
import { ReactComponent as Wechat } from "./wechat.svg";
import { ReactComponent as Baidu } from "./baidu.svg";

interface SvgArr {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>
}

const arr:SvgArr = {
  wechat:Wechat,
  baidu:Baidu
}
export default arr