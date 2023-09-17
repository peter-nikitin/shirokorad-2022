import React from "react";
import styled from "styled-components";
import { deviceBreakpoint } from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { HeaderWrapper } from "../components/HeaderWrapper";

const ContactPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
  margin: 30px auto 70px auto;
`;

const TextWrapper = styled.p`
  padding: 20px 20px 20px 50px;
  max-width: 100%;
  width: 55ch;
  @media ${deviceBreakpoint.mobile} {
    padding: 10px;
  }
`;

const ContactsWrapper = styled.div`
  /* max-width: 300px; */
  padding: 20px 20px 20px 50px;
  width: 55ch;
  max-width: 100%;
  @media ${deviceBreakpoint.mobile} {
    padding: 10px;
  }
`;

const EmailWrapper = styled.a`
  display: block;
  position: relative;
  padding-left: 30px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg' width='17' height='17'%3E%3Cpath d='M.5 2.5A1.5 1.5 0 012 1h12a1.5 1.5 0 011.5 1.5v1.208L8 7.926.5 3.708V2.5z' fill='currentColor'%3E%3C/path%3E%3Cpath d='M.5 4.855V12.5A1.5 1.5 0 002 14h12a1.5 1.5 0 001.5-1.5V4.855L8 9.074.5 4.854z' fill='%234B473F' %3E%3C/path%3E%3C/svg%3E");
  }
`;

const PhoneWrapper = styled.a`
  display: block;

  position: relative;
  padding-left: 30px;
  font-size: 20px;
  font-weight: bold;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: url('data:image/svg+xml,<svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" width="17" height="17"><path fill="%234B473F"  d="M2.5 0A2.5 2.5 0 000 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 002.5-2.5v-1.382a1.5 1.5 0 00-.83-1.342l-2.415-1.208a1.5 1.5 0 00-2.094.868l-.298.893a.71.71 0 01-.812.471A5.547 5.547 0 014.2 6.45a.71.71 0 01.471-.812l1.109-.37a1.5 1.5 0 00.98-1.787l-.586-2.344A1.5 1.5 0 004.72 0H2.5z" ></path></svg>');
  }
`;



const contacts = () => {
  return (
    <Layout pageTitle={`Контакты | Наталья Широкорад - дизайнер интерьеров`}>
      <>
        <HeaderWrapper>Контакты</HeaderWrapper>
        <ContactPageWrapper>
          <TextWrapper>
            В&nbsp;работе нам важно услышать клиента, предложить ему разные
            варианты решения его задач. Все люди очень разные, у&nbsp;всех свои
            вкусы и&nbsp;предпочтения. Мы&nbsp;никогда не&nbsp;навязываем наше
            видение интерьера, стараемся выслушать наших клиентов и&nbsp;задать
            наводящие вопросы, чтобы предложить именно те&nbsp;решения, которые
            интересны клиенту. <br />
            Итогом нашей работы всегда является именно тот дом, о&nbsp;котором
            мечтал его хозяин.
          </TextWrapper>

          <ContactsWrapper>
            <p>Пишите нам и мы обязательно вам ответим:</p>
            <EmailWrapper href="mailto:shirokorad_n@mail.ru">
              shirokorad_n@mail.ru
            </EmailWrapper>
            <PhoneWrapper href="tel:+79263941004">
              8 (926) 394-10-04
            </PhoneWrapper>
            <p>Широкорад Наталья </p>
          </ContactsWrapper>
        </ContactPageWrapper>
      </>
    </Layout>
  );
};

export default contacts;
