import React from 'react'



import HomePage, {
  Navbar,
  Logo,
  NextPage,
  VedioControls,
  Spacer,
  ScreenWrap,
  Player,
  Title,
  Name,
  MainScroller,
  Spacerbt,
} from "./Home.style";

  import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


import { HashLink } from "react-router-hash-link";

  import Vedio from "./../../assets/LioanKing.mp4";
  import Vedio2 from "./../../assets/00_MAIN.mp4";


import { Row, Col, Container } from "react-bootstrap";

import muteimg from "./../../assets/Mute.png";
import soundimg from "./../../assets/Sound.png";
import replayimg from "./../../assets/replay.png";
import playimg from "./../../assets/play.png";
import pauseimg from "./../../assets/pause.png";


import vectorimg from "./../../assets/Polaroid.png";




export default function Home() {



const backbanner = {
  backgroundImage: `url(${vectorimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
};



const play = () => {
  document.getElementById("player").play();
};

const Pause = () => {
  document.getElementById("player").pause();
};

const volumei = () => {
  document.getElementById("player").volume += 0.1;
};

const volumed = () => {
  document.getElementById("player").volume -= 0.1;
};

const load = () => {
  document.getElementById("player").load();
};


  return (
    <HomePage id="vertical">
      <Navbar>
        <Logo>Nina Lee Films</Logo>
        <Link to="/about" className="alink">
          <NextPage>About</NextPage>
        </Link>
      </Navbar>

      {/* Slides For Web Only */}
      <div className="onyforWeb">
        <Row>
          <Col>
            <VedioControls>
              <input
                type="image"
                src={playimg}
                onClick={play}
                className="spce"
              />
              <input
                type="image"
                src={pauseimg}
                onClick={Pause}
                className="spcer"
              />
              <input
                type="image"
                src={replayimg}
                onClick={load}
                className="spce"
              />
              <input
                type="image"
                src={muteimg}
                onClick={volumed}
                className="spcer"
              />
              <input
                type="image"
                src={soundimg}
                onClick={volumei}
                style={{ background: "black" }}
                className="spce"
              />
            </VedioControls>
          </Col>
        </Row>
        <MainScroller>
          <ScreenWrap style={backbanner}>
            <Player>
              <video id="player" height="400" controls autoPlay>
                <source src={Vedio} type="video/mp4" />
                <source src={Vedio} type="video/ogg" />
              </video>
            </Player>
            <Title>
              <Name>Nappily Ever After: What Had Happened Was</Name>
            </Title>
          </ScreenWrap>

          <Spacerbt />

          <ScreenWrap style={backbanner} onlyForMob>
            <Player>
              <video id="player" height="400" controls autoPlay>
                <source src={Vedio} type="video/mp4" />
                <source src={Vedio} type="video/ogg" />
              </video>
            </Player>
            <Title>
              <Name>Nappily Ever After: What Had Happened Was</Name>
            </Title>
          </ScreenWrap>

          <Spacerbt />

          <ScreenWrap style={backbanner} onlyForMob>
            <Player>
              <video id="player" height="400" controls autoPlay>
                <source src={Vedio} type="video/mp4" />
                <source src={Vedio} type="video/ogg" />
              </video>
            </Player>
            <Title>
              <Name>Nappily Ever After: What Had Happened Was</Name>
            </Title>
          </ScreenWrap>
        </MainScroller>
      </div>
      {/* Slides For Mobile Only */}

      <div id="vertical" className="onyforMob">
        <section className="active cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio2} type="video/mp4" />
                    <source src={Vedio2} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
        <section className="cursorWrap">
          <div className="inner">
            <Row>
              <Col>
                <VedioControls>
                  <input
                    type="image"
                    src={playimg}
                    onClick={play}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={pauseimg}
                    onClick={Pause}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={replayimg}
                    onClick={load}
                    className="spce"
                  />
                  <input
                    type="image"
                    src={muteimg}
                    onClick={volumed}
                    className="spcer"
                  />
                  <input
                    type="image"
                    src={soundimg}
                    onClick={volumei}
                    style={{ background: "black" }}
                    className="spce"
                  />
                </VedioControls>
              </Col>
            </Row>
            <br />

            <MainScroller>
              <ScreenWrap style={backbanner} onlyForMob>
                <Player>
                  <video id="player" height="400" controls autoPlay>
                    <source src={Vedio} type="video/mp4" />
                    <source src={Vedio} type="video/ogg" />
                  </video>
                </Player>
                <Title>
                  <Name>Nappily Ever After: What Had Happened Was</Name>
                </Title>
              </ScreenWrap>
            </MainScroller>
          </div>
        </section>
      </div>

      <Navbar footer>
        <HashLink to="/about#agency" className="alink">
          <Logo>Agency</Logo>
        </HashLink>

        <HashLink to="/about#contct" className="alink">
          <NextPage>Contact</NextPage>
        </HashLink>
      </Navbar>
    </HomePage>
  );
}
