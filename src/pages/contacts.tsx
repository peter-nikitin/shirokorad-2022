import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const ContactsWrapper = styled.div`
  text-align: center;
  max-width: 550px;
  margin: 0 auto;
`;

const contacts = () => {
  return (
    <Layout
      pageTitle={`Контакты | Наталья Широкорад - дизайнер интерьеров`}
    >
      <ContactsWrapper>
        <h1>Контакты</h1>

        <p>
          В&nbsp;работе нам важно услышать клиента, предложить ему разные
          варианты решения его задач. Все люди очень разные, у&nbsp;всех свои
          вкусы и&nbsp;предпочтения. Мы&nbsp;никогда не&nbsp;навязываем наше
          видение интерьера, стараемся выслушать наших клиентов и&nbsp;задать
          наводящие вопросы, чтобы предложить именно те&nbsp;решения, которые
          интересны клиенту. <br />
          Итогом нашей работы всегда является именно тот дом, о&nbsp;котором
          мечтал его хозяин.
        </p>
        <p>Пишите нам и мы обязательно вам ответим:</p>
        <a href="mailto:shirokorad_n@mail.ru">shirokorad_n@mail.ru</a>
        <br />
        <a href="tel:+79263941004">8 (926) 394-10-04</a>
        <p>Широкорад Наталья </p>
      </ContactsWrapper>
    </Layout>
  );
};

export default contacts;
