import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../API/BootApi";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Course Project";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Course added successfully");
      },
      (error) => {
        console.log(error);
        console.log("Error");
        toast.error("Error ! Something went wrong");
      }
    );
  };

  const updatingCourse = (course) => {
    axios.put(`${base_url}/courses`, course).then(
      (response) => {
        console.log(response);
        toast.success("Course Updated");
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };
  return (
    <div>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter Course Id"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Course Title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter Course Description"
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="primary me-md-3 my-3">
            Add Course
          </Button>
          <Button type="reset" color="warning me-md-3 my-3">
            Clear
          </Button>
          <Button
            onClick={() => {
              updatingCourse(course);
            }}
          >
            Update
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
