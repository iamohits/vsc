import styled from "styled-components"

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#10b2ff" : "#9e44f6")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid #10b2ff;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    background: ${({ primary }) => (primary ? "#9e44f6" : "#10b2ff")};
    border: 1px solid #10b2ff;
    color: #fff;
    transition: all 0.3s;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
