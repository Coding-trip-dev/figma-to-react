import React from 'react'


import AboutUs, {
  Navbar,
  Logo,
  NextPage,
  Head,
  Para,
  Spacer,
  MainPara,
  Contact,
  Spacerr,
  Socials,
  Link,
  SocialWrap,
  ImageTag,
} from "./About.style";
import { HashLink } from "react-router-hash-link";


import { Row, Col, Container } from "react-bootstrap";

import img1 from "./../../assets/AboutOne.png";
import img2 from "./../../assets/logo.png";
import img3 from "./../../assets/contct.png";

import img1tab from "./../../assets/AboutOneTab.png";
import img2tab from "./../../assets/ContactTab.png";

import img1mob from "./../../assets/mob1.png";
import img2mob from "./../../assets/mob2.png";


import { AiFillInstagram } from "react-icons/ai";
import { VscTwitter } from "react-icons/vsc";
import { SiYoutube } from "react-icons/si";
import { TiSocialVimeo } from "react-icons/ti";




export default function About() {
  return (
    <AboutUs>
      <Navbar>
        <Logo>Nina Lee Films</Logo>
        <NextPage id='about'>About</NextPage>
      </Navbar>
      <Spacer />
      <Spacer />
      <Row>
        <Col lg={6} md={12} sm={12} className="setPadl">
          <Head>About</Head>
        </Col>
        <Col lg={6} md={12} sm={12} className="setPadr">
          <MainPara>
            Nina Lee is an award winning Writer, Director, and Actor, who
            sometimes does Stand Up too.
          </MainPara>
          <ImageTag>
            <img src={img1} className="onyforWeb img1wid" />
            <img src={img1tab} className="fixwid onyforTab" />
            <img src={img2mob} className="fixwid onyforMob" />
          </ImageTag>

          <Para>
            She resides in Atlanta, GA with her dogs Glen Coco, Casper and
            Oakley. She attended Spelman College where she studied Women Studies
            with a Film and theater concentration. She put together Spelman’s
            first student film festival. She since has been making a name for
            herself in the industry and has worked with brands like Netflix,
            HBO, Blavity, Adult Swim and more. She’s Created, Written, and
            Starred in her own projects such as: The Girls Room, Sorry About
            That and ARTISTIC.
          </Para>
          <Para>
            Her latest project, ARTISTIC, is a short film written and directed
            by Nina, is Executive Produced by Lena Waithe and stars Marshawn
            Lynch and newcomer Taylor Freeman. The short film has been accepted
            into 4 Oscar Qualifying festivals so far and won an Audience Choice
            Award for Best Short Film at CIFF. Her goal is to keep making dope
            films and creating + spending lots of time with her dogs and family
            when she’s not.
          </Para>
        </Col>
      </Row>
      <Spacer RemMob />
      <Spacer />
      <Spacer />
      <Row>
        <Col lg={6} md={12} sm={12} className="setPadl">
          <Head id="agency">Agency</Head>
        </Col>
        <Col lg={6} md={12} sm={12} className="setPadr">
          <MainPara>
            DefiniteLee Films and Agency is a full service creative virtual
            studio.
          </MainPara>

          <ImageTag agency>
            <img src={img2} className="fixwid" />
          </ImageTag>
          <Para>
            We have adopted a gratifying yet simple approach to our storytelling
            in both film and through social media. Which is well suited for the
            world's constantly evolving landscape. From strategy and execution
            to brand identity, we are here to bring out the creativity of your
            brand through words and help design a visual message across multiple
            mediums and platforms.
          </Para>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12} sm={12} className="setPadl">
          <Head id="contct">Contact</Head>
          <ImageTag init>
            <img src={img3} className="mrt onyforWeb setWidWb" />
            <img src={img2tab} className="mrt fixwid onyforTab" />
            <img src={img1mob} className="mrt fixwid onyforMob" />
          </ImageTag>
        </Col>
        <Col lg={6} md={12} sm={12} className="setPadr">
          <MainPara>&nbsp;</MainPara>

          <Contact>Commercial & Music Videos</Contact>
          <Contact site>shelby@GroupThrpy.com</Contact>

          <Spacerr />
          <Contact>All other inquiries</Contact>
          <Contact site>Ninaleefilms@gmail.com </Contact>
          <Spacerr />

          <SocialWrap>
            <Socials>
              <Link>
                <AiFillInstagram />
              </Link>
              <Link lnk> ninaserafinaaa</Link>
            </Socials>
            <Socials>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Socials>
            <Socials>
              <Link>
                <VscTwitter />
              </Link>
              <Link lnk> NinaSerafina</Link>
            </Socials>
          </SocialWrap>
          <SocialWrap mrtp>
            <Socials>
              <Link>
                <TiSocialVimeo />
              </Link>
              <Link lnk> definiteleefilms</Link>
            </Socials>
            <Socials>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Socials>
            <Socials>
              <Link>
                <SiYoutube size={20} />
              </Link>
              <Link lnkyt> definiteleefilms</Link>
            </Socials>
          </SocialWrap>
        </Col>
      </Row>
      <Spacer />
      <Spacer /> <Spacer />
      <Navbar footer>
        <HashLink to="#agency" className="alink">
          <Logo>Agency</Logo>
        </HashLink>

        <HashLink to="#contct" className="alink">
          <NextPage>Contact</NextPage>
        </HashLink>
      </Navbar>
    </AboutUs>
  );
}
