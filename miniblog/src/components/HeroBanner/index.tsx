import banner from "../../assets/banner.png";
import styled from "styled-components";

const StyledHeroBanner = styled.div`
  width: 100%;
  background-color: #041833;
  img {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
`;

function HeroBanner() {
  return (
    <StyledHeroBanner>
      <img src={banner} alt="" />
    </StyledHeroBanner>
  );
}

export default HeroBanner;
