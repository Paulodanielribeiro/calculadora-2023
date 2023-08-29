import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  margin-top: 12px;
  width: 150px;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  background-color: #2ecc71;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default function MyButton(props) {
  return (
    <Button onPress={props.onPress}>
      <ButtonTitle>{props.title}</ButtonTitle>
    </Button>
  );
}
