import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import MyButton from "../components/MyButton";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <Title>Bem-vindo à Tela Principal</Title>
      <MyButton title="Calcular IMC" onPress={() => navigation.navigate("IMCScreen")} />
      <MyButton title="Calcular ICQ" onPress={() => navigation.navigate("ICQScreen")} />
    </Container>
  );
}
