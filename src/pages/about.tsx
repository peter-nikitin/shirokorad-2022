import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { deviceBreakpoint } from "../components/GlobalStyles";
import Layout from "../components/Layout";

type Person = { role: string; name: string; desc: string; imageName: string };

const Person = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Portrait = styled.div`
  max-width: 250px;
  padding: 25px 10px;
  @media ${deviceBreakpoint.desktop} {
    padding-right: 40px;
  }
`;

const Description = styled.div`
  max-width: 450px;
`;

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Role = styled.div`
  font-size: 0.8rem;
`;

const PageHeader = styled.h1`
  text-align: center;
`;

const contacts = () => {
  return (
    <Layout
      pageTitle={`Команда студии | Наталья Широкорад - дизайнер интерьеров`}
    >
      <>
        <PageHeader>Команда</PageHeader>
        <Person>
          <Portrait>
            <StaticImage
              alt="Наталья Широкорад - Основатель студии"
              src="../images/team_natasha.jpg"
              height={350}
            />
          </Portrait>
          <Description>
            <Role>Основатель студии</Role>
            <Name>Наталья Широкорад</Name>
            <p>
              В 2009 закончила МАрхИ. Несколько лет проработав с "Большой
              архитектурой", решила оставить глобальные вопросы и заняться
              домашним уютом. Архитектурное образование и работа над большими
              проектами не прошли бесследно, хороший интерьер начинается с
              грамотно построенной и продуманной планировки. Пространство, в
              котором продуман каждый уголок легко декорировать и наполнять
              уютными вещами.
            </p>
          </Description>
        </Person>
        <Person>
          <Portrait>
            <StaticImage
              alt="Ткаченко Ирина - Главный архитектор"
              height={350}
              src="../images/team_ira.jpg"
            />
          </Portrait>
          <Description>
            <Role>Главный архитектор</Role>
            <Name>Ткаченко Ирина</Name>
            <p>
              В 2009 закончила МАрхИ. Долгое время работала в архитектурных
              мастерских, проектировала частные дома. Работа с большими объемами
              выработала структурированный и четкий подход к основным
              строительным процессам.
            </p>
          </Description>
        </Person>
        <Person>
          <Portrait>
            <StaticImage
              alt="Рябова Ольга - Декоратор"
              height={350}
              src="../images/team_olia.jpg"
            />
          </Portrait>
          <Description>
            <Role>Декоратор</Role>
            <Name>Рябова Ольга</Name>
            <p>
              Училась и продолжает учится у ведущих декораторов России. Без
              искусства и мелких деталей интерьер не может стать уютным, над
              нашими проектами мы всегда работаем до самого конца и помогаем
              клиентам наполнить дом важными мелочами
            </p>
          </Description>
        </Person>
      </>
    </Layout>
  );
};

export default contacts;
