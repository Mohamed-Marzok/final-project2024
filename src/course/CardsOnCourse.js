import React from "react";
import { Button, Card, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const ContentCard = styled(Card)`
  position: relative;
  width: 300px;
  height: 150px;
  padding: 10px;
  cursor: pointer;
`;

export const AssignmentCard = ({ assignment, deleteFun }) => {
  const handleOpenAssignment = () => {
    if (assignment && assignment.File) {
      const byteCharacters = atob(assignment.File);
      const byteArray = Uint8Array.from(byteCharacters, (char) =>
        char.charCodeAt(0)
      );
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank"); // Open in a new tab
    }
  };

  return (
    <ContentCard key={assignment.id}>
      <Stack
        sx={{ height: "100%" }}
        direction="column"
        justifyContent="space-between"
      >
        <div>
          <StyledH3>{assignment.Tittle}</StyledH3>
          <StyledP>{assignment.Describtion}</StyledP>
        </div>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" onClick={handleOpenAssignment}>
            Open
          </Button>
          <Button variant="outlined" color="secondary">
            Grad
          </Button>
        </Stack>
      </Stack>
      <IconButton
        aria-label="delete"
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
        }}
        color="error"
        size="small"
        onClick={deleteFun}
      >
        <DeleteIcon />
      </IconButton>
    </ContentCard>
  );
};

export const ExamCard = ({ exam, deleteFun }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const examId = exam.Id;
  const handleOpenExam = () => {
    navigate(`/course/${id}/exam/${examId}`);
  };

  return (
    <ContentCard key={exam.Id}>
      <Stack
        sx={{ height: "100%" }}
        direction="column"
        justifyContent="space-between"
      >
        <div>
          <StyledH3>{exam.Tittle}</StyledH3>
          <StyledP>{exam.Describtion}</StyledP>
        </div>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" onClick={handleOpenExam}>
            Open
          </Button>
          <Button variant="outlined" color="secondary">
            Grad
          </Button>
        </Stack>
      </Stack>
      <IconButton
        aria-label="delete"
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
        }}
        color="error"
        size="small"
        onClick={deleteFun}
      >
        <DeleteIcon />
      </IconButton>
    </ContentCard>
  );
};

export const LectureCard = ({ lecture, deleteFun }) => {
  const handleOpenLecture = () => {
    if (lecture && lecture.LecFile) {
      const byteCharacters = atob(lecture.LecFile);
      const byteArray = Uint8Array.from(byteCharacters, (char) =>
        char.charCodeAt(0)
      );
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank"); // Open in a new tab
    }
  };

  return (
    <ContentCard key={lecture.id}>
      <Stack
        sx={{ height: "100%" }}
        direction="column"
        justifyContent="space-between"
      >
        <div>
          <StyledH3>{lecture.Name}</StyledH3>
          <StyledP>{lecture.Description}</StyledP>
        </div>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" onClick={handleOpenLecture}>
            Open
          </Button>
        </Stack>
      </Stack>
      <IconButton
        aria-label="delete"
        sx={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
        }}
        color="error"
        size="small"
        onClick={deleteFun}
      >
        <DeleteIcon />
      </IconButton>
    </ContentCard>
  );
};

export const AllCard = ({ item, lectures }) => {
  const handleOpenFile = () => {
    const file = item.LecFile || item.File;
    console.log(file);
    if (file) {
      const byteCharacters = atob(file);
      const byteArray = Uint8Array.from(byteCharacters, (char) =>
        char.charCodeAt(0)
      );
      const blob = new Blob([byteArray], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank"); // Open in a new tab
    }
  };

  return (
    <ContentCard key={item.id}>
      <Stack
        sx={{ height: "100%" }}
        direction="column"
        justifyContent="space-between"
      >
        <div>
          <StyledH3>{item.Tittle || item.Name || item.Title}</StyledH3>
          <StyledP>{item.Describtion || item.Description}</StyledP>
        </div>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" onClick={handleOpenFile}>
            Open
          </Button>
          {lectures.includes(item) ? null : (
            <Button variant="outlined" color="secondary">
              Grad
            </Button>
          )}
        </Stack>
      </Stack>
    </ContentCard>
  );
};

const StyledH3 = styled.h3`
  color: #471fade3;
`;

const StyledP = styled.p`
  color: #777;
`;
