import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Course Project";
  }, []);
  return (
    <div className="p-5 bg-light text-center">
      <h1>Course Project</h1>
      <p>
        This Course project is build by using springboot as a backend and
        reactjs as a frontend.
      </p>
      <Container>
        <Button className="my-5" color="primary" outline>
          Start Exploring it
        </Button>
      </Container>
    </div>
  );
};

export default Home;
