import { Link } from "react-router-dom";
import styled from "styled-components";
export const Footer = () => {
  return (
    <SFooter>
      &copy;2023 test Inc
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`
