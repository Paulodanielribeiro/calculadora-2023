import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
  margin-top: 12px;
  width: 200px;
  padding-vertical: 10px;
  padding-horizontal: 12px;
  border-width: 1px;
  border-color: #d6d6d6;
  border-radius: 5px;
  font-size: 16px;
`;

export default function MyInput(props) {
  return (
    <Input
      placeholder={props.myPlaceholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}
