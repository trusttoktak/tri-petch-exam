import styled from "styled-components";
import { FlexDisplay, ContentDisplay } from "../helper/AppStyle";
import DisplaySize from "../helper/DisplaySize";

export const Content = ({
  no,
  title,
  content,
  underlineColor = "#603EBE",
  background = "#FFFFFF",
  contentColor = "#000000",
  noColor = "#000000",
  revert = false,
}) => {
  const ContentStyled = styled.article`
    display: flex;
    justify-content: center;
    background: ${background};
    padding: 61px 28px;

    .content {
      padding-left: 120px;
    }

    @media (max-width: ${DisplaySize.xl}px) {
      padding: 30px 0;
    }

    @media (max-width: ${DisplaySize.lg}px) {
      .content {
        padding-left: ${revert ? 10 : 20}px;
      }
    }

    @media (max-width: ${DisplaySize.sm}px) {
      padding: 0;

      .space {
        display: none;
      }

      .content {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  `;

  const Title = styled.div`
    display: flex;

    @media (max-width: ${DisplaySize.lg}px) {
      padding-left: 20px;
    }
  `;

  const TitleNumber = styled.div`
    margin-top: 7px;
    height: 5px;
    width: 22px;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: center;
    background: transparent;
    border-radius: 5px;
    box-shadow: 0 23px 0 0 ${underlineColor};
    color: ${noColor};

    @media (max-width: ${DisplaySize.sm}px) {
      margin-top: 5px;
      font-size: 14px;
      height: 4px;
      width: 18px;
      box-shadow: 0 18px 0 0 ${underlineColor};
    }
  `;

  const TitleText = styled.div`
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 1.5px;
    color: #c2c2c2;

    @media (max-width: ${DisplaySize.sm}px) {
      font-size: 28px;
    }
  `;

  const TextDisplay = styled.div`
    color: ${contentColor};
    margin-top: 20px;
    font-size: 20px;
    line-height: 28px;

    @media (max-width: ${DisplaySize.lg}px) {
      font-size: 18px;
      padding-left: 20px;
      padding-right: ${revert ? 55 : 30}px;
    }

    @media (max-width: ${DisplaySize.sm}px) {
      margin-top: 10px;
      font-size: 15px;
      line-height: normal;
      padding: 0 20px;
    }
  `;

  return (
    <ContentStyled>
      <ContentDisplay revert={revert}>
        <FlexDisplay sm={1} className="space" />
        <FlexDisplay sm={2} className="content">
          <Title>
            <TitleNumber>{no}</TitleNumber>
            <TitleText>{title}</TitleText>
          </Title>
          <TextDisplay>{content}</TextDisplay>
        </FlexDisplay>
      </ContentDisplay>
    </ContentStyled>
  );
};
