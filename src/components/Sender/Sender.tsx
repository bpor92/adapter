import React, { FormEvent, useState } from "react";
import WeirdResponse from "../../lib/WeirdResponse";
import styled from "styled-components";

const SenderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  border: 1px solid black;
  box-shadow: 0 5px 20px -10px;
  padding: 20px;

  label {
    margin-top: 10px;
    align-self: flex-start;
  }

  input,
  textarea {
    font-size: 1.1em;
    width: 100%;
    margin: 20px 0;
  }

  input {
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100px;
    align-self: flex-end;
    margin: 0;
  }

  textarea {
    height: 200px;
  }
`;

export const Sender = ({ sendMessage }: { sendMessage: Function }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const messageToSend: WeirdResponse = {
      status: 200,
      data: {
        data: [[email, name]],
        parameters: {
          status: 200,
          msg: message,
        },
      },
    };
    sendMessage(messageToSend);
  };

  return (
    <div>
      <SenderForm onSubmit={submitHandler}>
        <h1>Sender</h1>
        <label htmlFor="send-name">Enter name</label>
        <input
          type="text"
          id="send-name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="send-email">Enter email</label>
        <input
          type="email"
          id="send-email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="send-message">Enter message</label>
        <textarea
          id="send-message"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input type="submit" value="Send" />
      </SenderForm>
    </div>
  );
};
