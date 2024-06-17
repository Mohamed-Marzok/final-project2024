import { Card, Checkbox } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function MultiAnsQuestion({ question }) {
  const optionsList = question.Options.map((option) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox />
        <li>{option}</li>
      </div>
    );
  });
  return (
    <Mcq>
      <Header>{question.Text}</Header>
      <Option>{optionsList}</Option>
    </Mcq>
  );
}

const Mcq = styled.div`
  padding: 10px;
  background-color: #eee;
`;
const Header = styled.h2`
  color: #471fade3;
`;
const Option = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
