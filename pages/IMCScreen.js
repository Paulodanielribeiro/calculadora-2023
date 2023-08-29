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

export default function IMCScreen() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");

  function calcularImc() {
    let imc = Number(peso) / (Number(altura) ** 2);
    setImc(imc.toFixed(2));
  }

  return (
    <Container>
      <Title>Calcular o IMC</Title>
      <MyInput myPlaceholder="Peso (em Kg)" value={peso} onChangeText={setPeso} />
      <MyInput myPlaceholder="Altura (em m)" value={altura} onChangeText={setAltura} />
      <MyButton title="Calcular" onPress={calcularImc} />
      {imc !== "" && <ResultText>O IMC é: {imc}</ResultText>}
    </Container>
  );
}
