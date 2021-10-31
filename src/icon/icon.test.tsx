/*
 * @Author: your name
 * @Date: 2021-10-27 13:19:33
 * @LastEditTime: 2021-10-30 13:57:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react-ui\src\icon\icon.test.tsx
 */
import React from "react";
import TestRenderer from "react-test-renderer"; // ES6
import { render, screen, fireEvent } from "@testing-library/react";
import Icon from "./index";

describe("icon", () => {
  // it("xxx", () => {
  //   const json = TestRenderer.create(<Icon name="baidu" />).toJSON();
  //   expect(json).toMatchSnapshot();
  // });

  test("icon clicked", () => {
    const handleClick = jest.fn();
    render(<Icon name="wechat" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/svg/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
