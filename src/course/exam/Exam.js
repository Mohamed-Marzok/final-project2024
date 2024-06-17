import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExam } from "../../redux/examSlice";
import ExamHeader from "./ExamHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "styled-components";
import McqQuestion from "./McqQuestion";
import MultiAnsQuestion from "./MultiAnsQuestion";
import { Button } from "@mui/material";

export default function Exam() {
  const { examId } = useParams();
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam.exam);
  const loading = useSelector((state) => state.exam.loading);
  const questionsList = exam.Questions?.map((question) => {
    if (question.Type === "mcq") {
      return <McqQuestion question={question} />;
    } else if (question.Type === "multiple choice") {
      return <MultiAnsQuestion question={question} />;
    }
  });
  useEffect(() => {
    dispatch(getExam(examId));
  }, [dispatch, examId]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Content>
      <ExamHeader examInfo={exam.exam} />
      <Questions>{questionsList}</Questions>
      <SubmitBtn variant="contained">Submit</SubmitBtn>
    </Content>
  );
}

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto !important;
  height: 50vh;
  padding: 20px 0;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;
const SubmitBtn = styled(Button)`
  position: absolute !important;
  bottom: 20px;
  right: 20px;
  z-index: 10000 !important;
`;
const Content = styled.div`
  position: relative;
`;
