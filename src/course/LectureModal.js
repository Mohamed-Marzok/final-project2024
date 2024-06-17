import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createAssignment } from "../redux/assignmentsSlice";
import { useParams } from "react-router-dom";
import { createLecture } from "../redux/lecturesSlice";
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

export default function BasicModal({ open, handleClose }) {
  const [lectureForm, setLectureForm] = React.useState({
    Name: "",
    Description: "",
    Link: "",
    File: null,
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createLecture({ courseId: id, lectureForm }));
    handleClose();
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
            style={{ marginBottom: "20px", color: "#471fade3" }}
          >
            New Lecture
          </h2>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) =>
                setLectureForm({ ...lectureForm, Name: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={(e) =>
                setLectureForm({
                  ...lectureForm,
                  Description: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              label="Link"
              variant="outlined"
              onChange={(e) =>
                setLectureForm({
                  ...lectureForm,
                  Link: e.target.value,
                })
              }
            />
            <TextField
              id="outlined-basic"
              type="file"
              variant="outlined"
              onChange={(e) =>
                setLectureForm({
                  ...lectureForm,
                  File: e.target.files[0],
                })
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
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
