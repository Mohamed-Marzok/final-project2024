import React from "react";
import styled from "styled-components";

const ExamInfoTable = ({ examInfo }) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <StyledTh>Title</StyledTh>
          <StyledTd>{examInfo.Tittle}</StyledTd>
        </tr>
        <tr>
          <StyledTh>Description</StyledTh>
          <StyledTd>{examInfo.Describtion}</StyledTd>
        </tr>
        <tr>
          <StyledTh>Instructions</StyledTh>
          <StyledTd>{examInfo.Instructions}</StyledTd>
        </tr>
        <tr>
          <StyledTh>Date</StyledTh>
          <StyledTd>{examInfo.Date}</StyledTd>
        </tr>
        <tr>
          <StyledTh>Number Of Questions</StyledTh>
          <StyledTd>{examInfo.NumOfQuestions}</StyledTd>
        </tr>
        <tr>
          <StyledTh>Grades</StyledTh>
          <StyledTd>{examInfo.Grades}</StyledTd>
        </tr>
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 70%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledTh = styled.th`
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  text-align: left;
`;

const StyledTd = styled.td`
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

export default ExamInfoTable;
