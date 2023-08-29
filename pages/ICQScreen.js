import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-horizontal: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const ResultText = styled.Text`
  margin-top: 18px;
  font-size: 20px;
  font-weight: bold;
`;

export default function ICQScreen() {
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [icq, setIcq] = useState("");

  function calcularIcq() {
    let icq = Number(cintura) / Number(quadril);
    setIcq(icq.toFixed(2));
  }

  return (
    <Container>
      <Title>Calcular o ICQ</Title>
      <MyInput myPlaceholder="Cintura (em cm)" value={cintura} onChangeText={setCintura} />
      <MyInput myPlaceholder="Quadril (em cm)" value={quadril} onChangeText={setQuadril} />
      <MyButton title="Calcular" onPress={calcularIcq} />
      {icq !== "" && <ResultText>O ICQ é: {icq}</ResultText>}
    </Container>
  );
}
