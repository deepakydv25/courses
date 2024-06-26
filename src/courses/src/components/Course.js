import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "../API/BootApi";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course Deleted");
        update(id);
      },
      (error) => {
        toast.error("Course not Deleted !! Server Problem");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
