// Link
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ul {
    list-style: none;
  }
`;

interface NavLinkProps {
  children: string;
  to: string;
}

const NavLink = styled(Link)<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#000" : "#999")};
  text-decoration: ${(props) => (props.isSelected ? "underline" : "none")};
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  margin-left: 20px;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const NavLinkWrapper = ({ children, to }: NavLinkProps) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <NavLink to={to} isSelected={isSelected}>
      {children}
    </NavLink>
  );
};

export default function Menu() {
  return (
    <StyledNav>
      <ul>
        <NavLinkWrapper to="/">Home</NavLinkWrapper>
        <NavLinkWrapper to="/about">Sobre Mim</NavLinkWrapper>
      </ul>
    </StyledNav>
  );
}
