import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../API/BootApi";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course || Course Project";
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
        toast.success("courses has been loaded", {
          toastId: "unique-random-text-xAu9C9-",
        });
      },
      (error) => {
        console.log(error);
        toast.error("something went wrong");
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourses} />
          ))
        : "No courses"}
    </div>
  );
};

export default AllCourses;
