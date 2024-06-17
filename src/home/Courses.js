import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCourses } from "../redux/CoursesSlice";
import { Card } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [userEmail, setUserEmail] = useState("");
  const courses = useSelector((state) => state.courses.courses);
  const isLoading = useSelector((state) => state.courses.loading);
  const userFromSlice = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user && user.Email) {
        setUserEmail(user.Email);
      } else {
        console.warn("User object is malformed or missing Email property.");
      }
    } else {
      console.warn("No user found in localStorage.");
    }
  }, [userFromSlice]);

  useEffect(() => {
    if (userEmail) {
      dispatch(getCourses(userEmail));
    }
  }, [userEmail, dispatch]);
  const handleCourseClick = (courseID) => {
    navigate(`/auth/course/${courseID}`);
  };
  const coursesList = useMemo(() => {
    console.log(courses);
    return courses?.map((course) => (
      <CourseCard
        key={course.Course.Id}
        onClick={() => handleCourseClick(course.Course.Id)}
      >
        <Image
          src={`data:image/png;base64,${course.Course.File}`}
          alt={course.Course.CourseName}
        />
        <Footer>{course.Course.CourseName}</Footer>
      </CourseCard>
    ));
  }, [courses]);

  return (
    <Content>
      {isLoading ? (
        <CircularProgress sx={{ alignSelf: "center" }} />
      ) : (
        coursesList
      )}
    </Content>
  );
}

const Content = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    overflow: auto;
    gap: 10px;
    z-index: -10000;
  }
`;

const CourseCard = styled(Card)`
  width: 200px;
  height: 200px;
  margin: 10px;
  padding: 8px;
  transition: all 1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Footer = styled.h3`
  padding: 0px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #471fade3;
`;
