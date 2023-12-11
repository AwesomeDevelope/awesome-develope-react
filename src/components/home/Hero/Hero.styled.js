import styled from '@emotion/styled';

export const HeroWrapper = styled.div`
  display: grid;

  grid-template-rows: auto auto auto;
  grid-template-columns: 60% auto;

  grid-template-areas:
    'title sub-title'
    'title description'
    'main-services button';

  .title {
    grid-area: title;
    margin-bottom: 100px;

    display: flex;
    flex-direction: column;

    font-size: 98px;
    letter-spacing: -3.92px;
    text-transform: uppercase;

    span {
      :first-of-type {
        font-weight: 700;
      }

      :last-of-type {
        font-weight: 200;
      }
    }
  }

  .main-services {
    grid-area: main-services;

    align-self: flex-end;

    font-size: 16px;
    font-weight: 200;
    line-height: 1.5;
    letter-spacing: 1.44px;
  }

  .sub-title {
    grid-area: sub-title;

    font-size: 48px;
    letter-spacing: -3.92px;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;

    span {
      :first-of-type {
        font-weight: 200;
      }

      :last-of-type {
        font-weight: 700;
      }
    }
  }

  .description {
    grid-area: description;

    text-align: justify;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.33;
  }

  .button {
    grid-area: button;

    padding: 16px 44px;

    border: 1px dashed #000000;
    background: rgba(0, 0, 0, 0.05);

    text-align: center;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
