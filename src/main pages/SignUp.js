import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

export default function SignUp() {
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <Content>
      <LoginCard>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </Stack>
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Confirm Password"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select value={role} label="Role" onChange={handleChange}>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="instructor">Instructor</MenuItem>
          </Select>{" "}
        </FormControl>
        <SignupBtn variant="contained">Sign up</SignupBtn>
        <LoginBtn>
          <p>Have an account?</p>
          <a href="login">Log In Now.</a>
        </LoginBtn>
      </LoginCard>
    </Content>
  );
}
const Content = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    height: calc(100vh - 40px);
  }
`;
const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 50px;
  gap: 20px;
`;
const SignupBtn = styled(Button)`
  white-space: nowrap;
`;
const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  a {
    text-decoration: none;
    color: #471fade3;
  }
`;
