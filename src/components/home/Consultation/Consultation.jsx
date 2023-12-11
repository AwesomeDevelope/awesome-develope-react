import { Section } from 'components';
import { ConsultationWrap, Item, List, Title } from './Consultation.styled';

import { title, items } from 'src/locales/uk/home/Consultation.json';

export default function Consultation() {
  return (
    <Section>
      <ConsultationWrap>
        <Title>
          <span>{title.first}</span>
          <span>{title.second}</span>
        </Title>

        <List>
          {items.map(({ image, title, description, buttonName }) => (
            <Item key={title + image.src}>
              <img src={`${image.src}`} alt={`${image.alt}`} />

              <div className="overlay">
                <h3>{title}</h3>
                <p>{description}</p>
                <button type="button">{buttonName}</button>
              </div>
            </Item>
          ))}
        </List>
      </ConsultationWrap>
    </Section>
  );
}
