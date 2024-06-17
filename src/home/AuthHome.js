import styled from "styled-components";
import Courses from "./Courses";
import CreateCourse from "./CreateCourse";
export default function AuthHome() {
  return (
    <Content>
      <Courses />
      <CreateCourse />
    </Content>
  );
}
const Content = styled.div`
  position: relative;

  height: (100vh - 60px);
  padding: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
    box-shadow: none;
  }
`;
