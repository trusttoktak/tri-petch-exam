import styled from "styled-components";
import DisplaySize from "../helper/DisplaySize";
import { FlexDisplay, ContentDisplay } from "../helper/AppStyle";

export const Header = ({
  title,
  revert = false,
  xlImage,
  mdImage,
  smImage,
}) => {
  const HeaderStyled = styled.header`
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
      padding-left: ${revert ? 120 : 60}px;
    }

    @media (max-width: ${DisplaySize.frame}px) {
      .title {
        padding-left: ${revert ? 140 : 60}px;
        max-width: ${DisplaySize.frame / 2 - 150}px;
      }
    }

    @media (max-width: ${DisplaySize.lg}px) {
      margin: 50px 0 70px 0;

      .title {
        max-width: ${DisplaySize.lg / 2 - 100}px;
        position: absolute;
        margin-top: ${revert ? 15 : 0}px;
        padding-left: 30px;
        translate: 0;
      }
    }

    @media (max-width: ${DisplaySize.sm}px) {
      margin-top: ${revert ? 5 : 25}px;
      font-size: 50px;

      .title {
        max-width: ${DisplaySize.sm / 2 - 100}px;
        padding-left: 20px;
      }
    }
  `;

  const Absolute = styled(ContentDisplay)`
    position: absolute;
    width: 100%;
    flex-direction: ${revert ? "row-reverse" : "row"};

    @media (max-width: ${DisplaySize.sm}px) {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
    }
  `;

  const Image = styled.div`
    position: relative;
    width: 100%;
    translate: ${revert ? 6 : -2}% ${revert ? -6 : 1}%;

    img {
      height: ${revert ? 50 : 60}vw;
      max-height: ${revert ? 815 : 950}px;
    }

    @media (max-width: 1580px) {
      translate: ${revert ? 5 : 20}% ${revert ? -10 : -3}%;
    }

    @media (max-width: ${DisplaySize.lg}px) {
      translate: 0% ${revert ? 0 : 3}%;

      img {
        height: 100vw;
        max-height: ${revert ? 568 : 719}px;
      }

      position: ${revert ? "relative" : "absolute"};
    }

    @media (max-width: ${DisplaySize.sm}px) {
      display: flex;
      justify-content: center;
      position: absolute;
      translate: 0 ${revert ? 85 : 70}px;

      img {
        max-height: ${revert ? 250 : 280}px;
      }
    }
  `;

  return (
    <HeaderStyled>
      <Absolute style={{ translate: "0 -5%", zIndex: 2 }}>
        <FlexDisplay sm={1}>
          <Image>
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

              <img alt="football player" />
            </picture>
          </Image>
        </FlexDisplay>
        <FlexDisplay sm={2}>
          <div className="title">{title}</div>
        </FlexDisplay>
      </Absolute>
    </HeaderStyled>
  );
};
