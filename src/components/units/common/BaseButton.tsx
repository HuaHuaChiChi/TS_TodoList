import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const BaseButton: FC<BaseButtonProps> = ({ children, onClick }) => {
  let color: string;

  if (children === "삭제") {
    color = "red";
  } else if (children === "완료") {
    color = "green";
  } else if (children === "취소") {
    color = "#505050";
  } else {
    color = "blue";
  }

  return (
    <CommonButton style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </CommonButton>
  );
};

export default BaseButton;

const CommonButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
