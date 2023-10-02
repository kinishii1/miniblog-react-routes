import { styled } from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #1875E8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 50px;
  `

function Footer() {
  return (
    <StyledFooter>
      <p>© 2023 Mini Blog developed by Kin Ishii</p>
    </StyledFooter>
  );
}

export default Footer;
