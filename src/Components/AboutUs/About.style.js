import styled, { css } from "styled-components";





export const AboutUs = styled.div`
  font-family: "Overpass", sans-serif;

  .setPadl {
    text-align: initial;
    padding: 0px 48px;
  }
  .setPadr {
    text-align: initial;
      padding: 0px 48px;
  }
  

  .fixwid {
    margin: 0px auto;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
      /* Styles */
      font-size: 48px;
      /* width: 100%; */
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 28px;
  border-bottom: 2px black solid;
  ${(props) =>
    props.footer &&
    css`
      border-bottom: none;
      border-top: 2px black solid;
    `};
  .alink {
    text-decoration: none;
    color: black;
  }
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

export const Head = styled.div`
  font-size: 64px;
  line-height: 125%;
  font-family: "Overpass", sans-serif;
  font-weight: 600;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    font-size: 48px;
  }

  @media(max-device-width: 550px){
    font-size: 48px;
  }
`;

export const MainPara = styled.div`
  font-family: "Overpass", sans-serif;
  color: #170011;
  font-weight: 600;
  font-size: 48px;
  line-height: 133%;
  margin-bottom: 48px;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    font-size: 32px;
    /* padding: 10px 32px; */
    margin-top: 40px ;
  }

  @media (max-device-width: 550px) {
    font-size: 24px;
  }
`;

export const Para = styled.div`
  font-family: "Overpass", sans-serif;
  color: #170011;
  font-weight: 500;
  font-size: 32px;
  line-height: 125%;
  margin-top: 48px;
  margin-bottom: 48px;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    /* Styles */
    font-size: 24px;
    /* padding: 0px 48px; */
  }

  @media (max-device-width: 550px) {
    font-size: 16px;
  }
`;


export const Spacer = styled.div`
  height: 50px;
  font-family: "Overpass", sans-serif;

  ${(props) =>
    props.RemMob &&
    css`
       @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  
        display: none;
      }
    `};
`;

export const Spacerr = styled.div`
  height: 40px;
  font-family: "Overpass", sans-serif;
`;
export const Contact = styled.div`
  font-family: "Overpass", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 133%;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    padding: 0px 32px;
  }

  ${(props) =>
    props.site &&
    css`
      font-weight: bold;
      text-decoration: underline;
      line-height: 133%;
    `};
`;


export const Socials = styled.div`

  font-family: "Overpass", sans-serif;
  display: flex;
  
`;


export const SocialWrap = styled.div`
  font-family: "Overpass", sans-serif;
  display: flex;

  @media(max-device-width: 600px){
  flex-direction: column;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    padding: 0px 32px;
  }

  ${(props) =>
    props.mrtp &&
    css`
      margin-top: 16px;
    `};
`;
export const Link = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 133%;

  ${(props) =>
    props.lnk &&
    css`
      text-decoration: underline;
      margin-left: 10px;
    `};

  ${(props) =>
    props.lnkyt &&
    css`
      text-decoration: underline;
      margin-left: 10px;
      position: relative;
      right: 3px;
    `};
`;

export const ImageTag = styled.div`
  font-family: "Overpass", sans-serif;

  text-align: center;
  .mrt {
    margin-top: 45px;
  }
 
  ${(props) =>
    props.agency &&
    css`
      text-align: initial;
      @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
        text-align: initial;
        ${"" /* padding: 0px 32px; */}
      }

      @media (max-device-width: 699px) {
        text-align: initial;
      }
    `};

  ${(props) =>
    props.init &&
    css`
      text-align: initial;
    `};
`;


export default AboutUs;
