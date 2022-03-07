import styled, { css } from "styled-components";



export const HomePage = styled.div`
  font-family: "Overpass", sans-serif;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 28px;
  border-bottom: 2px black solid;

.alink{
  text-decoration: none;
  color: black;
}

  ${(props) =>
    props.footer &&
    css`
      border-bottom: none;
      border-top: 2px black solid;
    `};
`;

export const Logo = styled.div`
  font-size: 18px;
  font-family: "Overpass", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 133%;
`;

export const NextPage = styled.div`
  font-size: 18px;
  font-family: "Overpass", sans-serif;
`;

export const VedioControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: initial;
  justify-content: flex-end;
  font-family: "Overpass", sans-serif;
  margin-top: 10px;
  @media (max-device-width: 767px) {
    justify-content: center;
  }

  .spce {
    margin-right: 15px;
    border: 1px black solid;
    border-radius: 3px;
    padding: 5px 5px 5px 6px;
  }
  .spcer {
    margin-right: 10px;
    border: 1px black solid;
    border-radius: 3px;
    padding: 5px 8px 5px 6px;
  }
`;
export const Spacer = styled.div`
  height: 50px;
  font-family: "Overpass", sans-serif;


`;

export const ScreenWrap = styled.div`
  @media (max-device-width: 767px) {
    height: 225px;
    width: 288px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-device-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    width: 100%;
    margin-top: 85px;
    margin-bottom: 85px;
  }

  font-family: "Overpass", sans-serif;
  display: flex;
  flex-direction: column;
  height: 696px;
  width: 888px;
  /* background: red ; */
  margin: 0px auto;
`;
export const Player = styled.div`
  height: 85%;
  font-family: "Overpass", sans-serif;
  #player {
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
      height: 108%;
      width: 106.2%;
      padding: 35px;
      position: relative;
      left: -23px;
      top: -39px;
    }
    @media (max-device-width: 767px) {
      height: 131%;
      width: 114.5%;
      padding: 35px;
      position: relative;
      left: -20px;
      top: -35px;
    }

    height: 108%;
    width: 99.2%;
    padding: 35px;
    position: relative;
    left: 2px;
    top: -39px;
  }
`;
export const Title = styled.div`
  height: 15%;
  /* background: gray; */
  
`;

export const Name = styled.div`
  font-family: "Overpass", sans-serif;
  font-style: normal;
  font-weight: 500;
  padding-top: 30px;
  font-size: 32px;
  line-height: 125%;

  @media (max-device-width: 767px) {
    padding-top: 10px;
    font-size: 12px;
  }
`;
export default HomePage;
