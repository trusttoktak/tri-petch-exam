import React from "react";
import styled from "styled-components";
import DisplaySize from "./helper/DisplaySize";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { athletes, players } from "./helper/data";
import Slider from "react-slick";

import footballerXL from "./assets/graphic-footballer-xl.svg";
import footballerMD from "./assets/graphic-footballer-md.svg";
import footballerSM from "./assets/graphic-footballer-sm.svg";
import playersXL from "./assets/graphic-players-xl.svg";
import playersMD from "./assets/graphic-players-md.svg";
import playersSM from "./assets/graphic-players-sm.svg";

const MainPage = styled.div`
  .row {
    padding-top: 10px;
  }

  .slider {
    display: none;

    .slick-dots {
      bottom: -50px;
    }

    .slick-dots li {
      width: 12px;
    }

    .slick-dots li button {
      height: 10px;
      width: 10px;
      background-color: #d8d8d8;
      border-radius: 50%;
    }

    .slick-dots li.slick-active button {
      background-color: #5c3caf;
    }

    .slick-dots li button:before {
      font-size: 0px;
    }
  }

  @media (max-width: ${DisplaySize.lg}px) {
    .row {
      padding-top: 55px;
    }
  }

  @media (max-width: ${DisplaySize.sm}px) {
    .row {
      display: none;
    }

    .slider {
      display: inherit;
      margin-top: 335px;
      padding-top: 60px;
      padding-bottom: 70px;
      background-color: #f5f4f9;

      &.player {
        margin-top: 320px;
      }
    }
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function App() {
  return (
    <MainPage>
      <section className="athletes">
        <Header
          title="athletes"
          xlImage={footballerXL}
          mdImage={footballerMD}
          smImage={footballerSM}
        />
        <div className="row athlete">
          {athletes.map((athlete) => (
            <Content key={athlete.no} {...athlete} type="athletes" />
          ))}
        </div>
        <div className="slider">
          <Slider {...sliderSettings}>
            {athletes.map((athlete) => (
              <Content
                {...athlete}
                background={null}
                underlineColor="#603EBE"
                contentColor="black"
                numberColor="black"
              />
            ))}
          </Slider>
        </div>
      </section>
      <section className="players">
        <Header
          title="players"
          revert={true}
          xlImage={playersXL}
          mdImage={playersMD}
          smImage={playersSM}
        />
        <div className="row players">
          {players.map((players) => (
            <Content key={players.no} {...players} type="players" />
          ))}
        </div>
        <div className="slider" style={{ marginTop: "px" }}>
          <Slider {...sliderSettings}>
            {players.map((players) => (
              <Content
                {...players}
                background={null}
                underlineColor="#603EBE"
                contentColor="black"
                numberColor="black"
              />
            ))}
          </Slider>
        </div>
      </section>
    </MainPage>
  );
}

export default App;
