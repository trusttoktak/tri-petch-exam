import styled, { css } from "styled-components";
import DisplaySize from "../helper/DisplaySize";
import { FlexDisplay, ContentDisplay } from "../helper/AppStyle";

export const Header = ({ title, xlImage, mdImage, smImage }) => {
  const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    font-size: 90px;
    line-height: 105.47px;
    text-transform: uppercase;
    color: #e7e7e7;
    margin: 100px 0;

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 50px;
      max-width: ${DisplaySize.xl / 2 - 150}px;
    }

    .athletes {
      padding-top: 20px;
      padding-left: 50px;
    }

    .players {
      margin-top: 40px;
      padding-left: 123px;
    }

    @media (max-width: ${DisplaySize.frame}px) {
      .title {
        max-width: ${DisplaySize.frame / 2 - 150}px;
      }

      .athletes {
        padding-left: 60px;
      }

      .players {
        padding-left: 140px;
      }
    }

    @media (max-width: ${DisplaySize.lg}px) {
      margin: 50px 0 70px 0;

      .title {
        max-width: ${DisplaySize.lg / 2 - 100}px;
        position: absolute;
        padding-left: 30px;
        translate: 0;
      }

      .athletes {
        margin-top: 0px;
      }

      .players {
        margin-top: 15px;
      }
    }

    @media (max-width: ${DisplaySize.sm}px) {
      font-size: 50px;
      line-height: 58.59px;
      margin: 0px 0 70px 0;

      .title {
        max-width: ${DisplaySize.sm / 2 - 100}px;
        padding-left: 20px;
      }

      .athletes {
        margin-top: 25px;
      }

      .players {
        margin-top: 5px;
      }
    }
  `;

  const Absolute = styled(ContentDisplay)`
    position: absolute;
    width: 100%;
    translate: 0 -7%;
    z-index: 2;

    ${(props) =>
      props.title === "athletes" &&
      css`
        flex-direction: row;
      `}

    ${(props) =>
      props.title === "players" &&
      css`
        flex-direction: row-reverse;
        padding-top: 20px;
      `}

    @media (max-width: ${DisplaySize.sm}px) {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
    }
  `;

  const Image = styled.div`
    position: relative;
    width: 100%;

    ${(props) =>
      props.title === "athletes" &&
      css`
        translate: -3% 2%;
      `}

    ${(props) =>
      props.title === "players" &&
      css`
        translate: 7% -6%;
      `}

    img {
      ${(props) =>
        props.title === "athletes" &&
        css`
          height: 60vw;
          max-height: 950px;
        `}

      ${(props) =>
        props.title === "players" &&
        css`
          height: 50vw;
          max-height: 815px;
        `}
    }

    @media (max-width: 1580px) {
      ${(props) =>
        props.title === "athletes" &&
        css`
          translate: 20% -3%;
        `}

      ${(props) =>
        props.title === "players" &&
        css`
          translate: 5% -10%;
        `}
    }

    @media (max-width: ${DisplaySize.lg}px) {
      ${(props) =>
        props.title === "athletes" &&
        css`
          position: absolute;
          translate: 0% 3%;
        `}

      ${(props) =>
        props.title === "players" &&
        css`
          position: relative;
          translate: 0% 0%;
        `}
      

      img {
        height: 100vw;
        ${(props) =>
          props.title === "athletes" &&
          css`
            max-height: 719px;
          `}

        ${(props) =>
          props.title === "players" &&
          css`
            max-height: 568px;
          `}
      }
    }

    @media (max-width: ${DisplaySize.sm}px) {
      display: flex;
      justify-content: center;
      position: absolute;

      ${(props) =>
        props.title === "athletes" &&
        css`
          translate: 0 70px;
          padding-top: 30px;
        `}

      ${(props) =>
        props.title === "players" &&
        css`
          translate: 0 85px;
        `}

      img {
        ${(props) =>
          props.title === "athletes" &&
          css`
            max-height: 280px;
          `}

        ${(props) =>
          props.title === "players" &&
          css`
            max-height: 250px;
          `}
      }
    }
  `;

  return (
    <HeaderStyled>
      <Absolute title={title}>
        <FlexDisplay sm={1}>
          <Image title={title}>
            <picture>
              <source
                media={`(min-width: ${DisplaySize.lg + 1}px)`}
                srcSet={xlImage}
              />
              <source
                media={`(min-width: ${DisplaySize.sm + 1}px) and (max-width: ${
                  DisplaySize.lg
                }px)`}
                srcSet={mdImage}
              />
              <source
                media={`(max-width: ${DisplaySize.sm}px)`}
                srcSet={smImage}
              />

              <img alt="displayImg" />
            </picture>
          </Image>
        </FlexDisplay>
        <FlexDisplay sm={2}>
          <div className={`title ${title}`}>{title}</div>
        </FlexDisplay>
      </Absolute>
    </HeaderStyled>
  );
};
