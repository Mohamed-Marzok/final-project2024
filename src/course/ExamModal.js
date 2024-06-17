import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createExam } from "../redux/examsSlice";
import { useParams } from "react-router-dom";
import QuestionsModal from "./QuestionsModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const initialExamForm = {
  tittle: "",
  describtion: "",
  instructions: "",
  time: "",
  grades: null,
  numOfQuestions: null,
  endDate: "",
};

const ExamModal = ({ open, handleClose }) => {
  const [examForm, setExamForm] = useState(initialExamForm);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [questionsModalOpen, setQuestionsModalOpen] = useState(false); // State to manage QuestionsModal visibility

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true when form is submitted
    try {
      await dispatch(createExam({ courseId: id, examForm }));
      setQuestionsModalOpen(true); // Open QuestionsModal after exam creation
      handleClose();
    } catch (error) {
      console.error("Failed to create exam:", error);
      // Handle error if needed
    } finally {
      setLoading(false); // Set loading back to false after async operation completes
    }
  };

  const handleQuestionsModalClose = () => {
    setQuestionsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2
            id="modal-modal-title"
            style={{ marginBottom: "20px", color: "#1f4fa3" }}
          >
            New Exam
          </h2>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={examForm.title}
              onChange={(e) =>
                setExamForm({ ...examForm, tittle: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={examForm.description}
              onChange={(e) =>
                setExamForm({ ...examForm, describtion: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Instructions"
              variant="outlined"
              value={examForm.instructions}
              onChange={(e) =>
                setExamForm({ ...examForm, instructions: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Grade"
              type="number"
              variant="outlined"
              value={examForm.grades || ""}
              inputProps={{ min: 0 }}
              onChange={(e) =>
                setExamForm({ ...examForm, grades: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Time (minutes)"
              type="number"
              variant="outlined"
              inputProps={{ min: 0 }}
              value={examForm.time || ""}
              onChange={(e) =>
                setExamForm({ ...examForm, time: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              type="date"
              variant="outlined"
              value={examForm.endDate}
              onChange={(e) =>
                setExamForm({ ...examForm, endDate: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Number Of Questions"
              type="number"
              variant="outlined"
              value={examForm.numOfQuestions || ""}
              onChange={(e) =>
                setExamForm({ ...examForm, numOfQuestions: e.target.value })
              }
            />
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: "100%",
              marginTop: "10px",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Loading..." : "Next"}
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Render QuestionsModal conditionally */}
      {questionsModalOpen && (
        <QuestionsModal
          open={questionsModalOpen}
          handleClose={handleQuestionsModalClose}
          numOfQuestions={examForm.numOfQuestions || 5} // Default to 5 if not set
        />
      )}
    </div>
  );
};

export default ExamModal;
