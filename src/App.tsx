import React, { useState } from "react";
import { Sender } from "./components/Sender/Sender";
import { Receiver } from "./components/Receiver/Receiver";
import WeirdResponse from "./lib/WeirdResponse";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  const [message, setMessage] = useState<WeirdResponse | null>(null);

  return (
    <Container className="App">
      <Sender sendMessage={setMessage} />
      <Receiver receiveMessage={message} />
    </Container>
  );
}

export default App;
