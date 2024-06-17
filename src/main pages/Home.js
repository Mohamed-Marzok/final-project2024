import { Container } from "@mui/material";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handleBtnClick = (name) => {
    navigate(`/${name}`);
  };
  return (
    <Content>
      <Left>
        <h1>
          <span> STUDYING</span> Online Is Now Much Easier
        </h1>
        <p>
          Acadmix is an interesting platform that will teach you in a more
          interactive way.
        </p>
        <Stack spacing={2} direction="row" sx={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleBtnClick("login")}
          >
            log in
          </Button>
          <Button variant="contained" onClick={() => handleBtnClick("signup")}>
            sign up
          </Button>
        </Stack>
      </Left>
      <Logo src="/shortlogo.png" />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: calc(100vh - 110px);
  }
`;

const Left = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 5px;
  }
  span {
    color: #f48c06;
    font-size: 40px;
  }
  p {
    color: #777;
    font-size: 16px;
  }
`;

const Logo = styled.img`
  height: 30%;
  animation: upDownLogo 4s infinite linear;
  @keyframes upDownLogo {
    0% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(-50px);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
