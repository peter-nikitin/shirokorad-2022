import React from "react";
import Layout from "../components/Layout";
import { HeaderWrapper } from "../components/HeaderWrapper";
import styled from "styled-components";
import { deviceBreakpoint } from "../components/GlobalStyles";
import { StaticImage } from "gatsby-plugin-image";

const ContactPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
  margin: 30px auto 70px auto;
`;

const Column = styled.div`
  /* max-width: 300px; */
  padding: 20px 20px 20px 50px;
  width: 55ch;
  max-width: 100%;
  @media ${deviceBreakpoint.mobile} {
    padding: 10px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
  margin-bottom: 50px;
`;

const SubHeader = styled.h2`
  padding-top: 0;
  margin-top: 0;
`;

const contacts = () => {
  return (
    <Layout
      pageTitle={`Услуги и цены | Наталья Широкорад - дизайнер интерьеров`}
    >
      <>
        <HeaderWrapper>Услуги и цены</HeaderWrapper>

        <Section>
          <Column>
            <StaticImage
              alt="Пример полного дизайн проекта"
              src="../images/design-project-example.jpg"
              width={500}
            />
            <a href="/design-project-example.pdf">Скачать пример (.pdf)</a>
          </Column>

          <Column>
            <SubHeader>Полный дизайн проект</SubHeader>
            <p>В услугу входит:</p>
            <ul>
              <li>обмер,</li>
              <li>коллажи по всем основным помещениям,</li>
              <li>все необходимые для строительства планы,</li>
              <li>развертки всех помещений,</li>
              <li>подбор отделочных материалов, светильников, сантехники,</li>
              <li>спецификации,</li>
            </ul>
            <p>Стоимость</p>
            <ul>
              <li>
                До 100 м<sup>2</sup> – 6 000 руб/м<sup>2</sup>
              </li>
              <li>
                100-200 м<sup>2</sup> – 5 000 руб/м<sup>2</sup>
              </li>
              <li>
                Свыше 200 м<sup>2</sup> – цена договорная
              </li>
            </ul>
            <p>
              3д в стоимость не входят. Необходимость и стоимость выполнения
              обсуждается отдельно.
            </p>

            <p></p>
          </Column>
        </Section>
        <Section>
          <Column>
            <StaticImage
              alt="Пример планировочных решений"
              src="../images/planing-example.jpg"
              width={500}
            />
            <a href="/planing-example.pdf">Скачать пример (.pdf)</a>
          </Column>

          <Column>
            <SubHeader>Планировочные решения</SubHeader>
            <p>В услугу входит:</p>
            <ul>
              <li>поиск планировочного решения,</li>
              <li>расстановка мебели,</li>
              <li>подготовка плана возводимых перегородок,</li>
            </ul>
            <p>Стоимость</p>
            <ul>
              <li>
                До 100 м<sup>2</sup> – 70 000 руб.
              </li>
              <li>
                100-200 м<sup>2</sup> – 100 000 руб.
              </li>
              <li>
                Свыше 200 м<sup>2</sup> – цена договорная
              </li>
            </ul>
            <p>Замер в услугу не входит. Оплачивается отдельно</p>
            <ul>
              <li>В пределах МКАД – 10 000 руб.</li>
              <li>За пределами МКАД – оговариватеся отдельно</li>
            </ul>
            <p></p>
          </Column>
        </Section>
        <Section>
          <Column>
            <StaticImage
              alt="Авторский надзор - фото реализованного проекта"
              src="../images/author-example.jpg"
              width={500}
            />
          </Column>

          <Column>
            <SubHeader>Авторский надзор</SubHeader>

            <p>В услугу входит:</p>
            <ul>
              <li>ведение проекта,</li>
              <li>выезды на стройку,</li>
              <li>
                контроль соответствия проводимых строительно-ремонтных работ,
              </li>
              <li>внесение изменений в проект,</li>
              <li>координация заказа материалов и оборудования,</li>
              <li>доукомплектация объекта материалами и товарами,</li>
              <li>контроль работы смежных компаний и подрядчиков,</li>
            </ul>
            <p>
              Стоимость: 4 000 руб/м<sup>2</sup> на весь срок строительства
            </p>
          </Column>
        </Section>
      </>
    </Layout>
  );
};

export default contacts;
