import { Section } from 'components';
import { HeroWrapper } from './Hero.styled';

import {
  title,
  mainServices,
  subTitle,
  description,
  buttonName,
} from '/public/locales/uk/home/Hero.json';

export default function Hero() {
  return (
    <Section>
      <HeroWrapper>
        <h1 className="title">
          <span>{title.first}</span>
          <span>{title.second}</span>
        </h1>
        <p className="main-services">{mainServices}</p>
        <h2 className="sub-title">
          <span>{subTitle.first}</span>
          <span>{subTitle.second}</span>
        </h2>
        <p className="description">{description}</p>
        <button className="button" type="button">
          {buttonName}
        </button>
      </HeroWrapper>
    </Section>
  );
}
