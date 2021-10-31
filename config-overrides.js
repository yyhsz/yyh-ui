/*
 * @Author: your name
 * @Date: 2021-10-27 14:35:25
 * @LastEditTime: 2021-10-27 15:01:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-ui\config-overrides.js
 */
const path = require('path')
const { override } = require('customize-cra');

const addSvgLoader = () => (config) => {
  config.module.rules.push({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: [path.resolve('src/icons')]
  })
  return config
}

module.exports = {
  webpack: override(addSvgLoader())
};