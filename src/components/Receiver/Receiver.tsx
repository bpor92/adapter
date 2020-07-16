import React, { useEffect, useState } from "react";
import NormalResponse from "../../lib/NormalResponse";
import WeirdToNormalResponseAdapter from "../../lib/WeirdToNormalResponseAdapter";
import styled from "styled-components";
import WeirdResponse from "../../lib/WeirdResponse";

const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  border: 1px solid black;
  box-shadow: 0 5px 20px -10px;
  padding: 20px;

  ul {
    margin: 0;
    align-self: flex-start;
  }

  p {
    width: 100%;

    span {
      float: right;
    }
  }
`;

export const Receiver = ({
  receiveMessage,
}: {
  receiveMessage: WeirdResponse | null;
}) => {
  const [response, setResponse] = useState<NormalResponse | null>(null);

  useEffect(() => {
    if (receiveMessage) {
      setResponse(new WeirdToNormalResponseAdapter(receiveMessage));
    } else {
      console.log("sdfsdfsdf");
    }
  }, [receiveMessage]);

  return (
    <RenderContainer>
      <h1>Receiver</h1>
      <p>
        Status: <span>{response?.status}</span>
      </p>
      <p>Data array:</p>
      {response ? (
        <ul>
          {response.data.map((el: string, idx: number) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      ) : null}
      <p>
        Message: <span>{response?.msg}</span>
      </p>
    </RenderContainer>
  );
};
