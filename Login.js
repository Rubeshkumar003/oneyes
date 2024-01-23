import axios from "axios";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const backgroundImageUrl = 'url("./imges.JPGE")';

const containerStyle = {
  backgroundImage: backgroundImageUrl,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff", 
};

const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let mail = document.getElementById("mail").value;

    let key = {
      name: name,
      gender: gender,
      mail: mail,
    };
    if (name === "") {
      alert("Must enter your Name");
    } else if (gender === "") {
      alert("Must enter your gender");
    } else if (mail === "") {
      alert("Must enter your mail");
    } else {
      axios.post("http://localhost:3060/loginpage", key).then((res) => {
        console.log(res);
        if (res.data.Status === "loged") {
          alert("values are inserted");
          window.location.href = "/page1";
        } else {
          alert("value not inserted");
        }
      });
    }
  };
  function handleAdmin() {
    let adminName = document.getElementById("adminName").value;
    let password = document.getElementById("password").value;
    if (adminName === "leshanth") {
      if (password === "2000") {
        alert("log in successfully");
        // window.location.href = "/page1";
        nav("/Page1");
      } else {
        alert("Invalid Password");
      }
    } else {
      alert("Invalid Admin Name");
    }
  }

  return (
    <div
      style={{

        height: "100vh",
        width: "200vh",
        backgroundSize: "cover",
      }}
    >
      <Container>
        {/* User Side */}
        <FormContainer>
          <h2>User Login</h2>
          <Form onSubmit={handleSubmit}>
            <Input type="text" id="name" placeholder="Name" />
            <Input type="text" id="gender" placeholder="gender" />
            <Input type="text" id="" placeholder="Age" />
            <Input type="text" id="mail" placeholder="Email" />
            <Button
              type="submit"
              onClick={(a) => {
                console.log(a);
                let key = {
                  id: a,
                };
              }}
            >
              User Login
            </Button>
          </Form>
        </FormContainer>

        {/* Admin Side */}
        <FormContainer>
          <h2>Admin Login</h2>
          <Form onSubmit={handleAdmin}>
            <Input type="text" id="adminName" placeholder="AdminName" />
            <Input type="password" id="password" placeholder="Password" />
            <Button type="submit">Admin Login</Button>
          </Form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default LoginPage;