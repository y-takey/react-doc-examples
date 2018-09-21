// @flow
import React from "react";
import Button from "antd/lib/button";

type Props = {
  /** ボタンの文字列 */
  text: string,
  /** 親要素の幅に合わせて広がる */
  block?: boolean,
  /** アイコン名（textの左横に表示) */
  icon?: "plus" | "edit" | "search",
  /** ボタンのクリックハンドラ */
  onClick: Function
};

const PrimaryButton = ({ text, block = false, icon, onClick }: Props) => (
  <Button type="primary" block={block} icon={icon} onClick={onClick}>
    {text}
  </Button>
);

export default PrimaryButton;
