import React from "react";
import styled from "styled-components";
import DisplaySize from "./helper/DisplaySize";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { athletes, players } from "./helper/data";

import footballerXL from "./assets/graphic-footballer-xl.svg";
import footballerMD from "./assets/graphic-footballer-md.svg";
import footballerSM from "./assets/graphic-footballer-sm.svg";

const MainPage = styled.div``;

function App() {
  return (
    <MainPage>
      <section className="athletes">
        <Header
          title="Athletes"
          xlImage={footballerXL}
          mdImage={footballerMD}
          smImage={footballerSM}
        />
        <div className="list athlete">
          {athletes.map((athlete) => (
            <Content key={athlete.no} {...athlete} />
          ))}
        </div>
        {/* <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper athlete"
        >
          {athletes.map((athlete) => (
            <SwiperSlide key={athlete.number}>
              <Article
                {...athlete}
                background={null}
                underlineColor="#603EBE"
                contentColor="black"
                numberColor="black"
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </section>
    </MainPage>
  );
}

export default App;
