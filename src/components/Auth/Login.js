import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSecurityQuestion, login } from "../../services/AuthService";
import LoginStep1 from "./LoginStep1";
import LoginStep2 from "./LoginStep2";

const Login = () => {
   const [securityQuestion, setSecurityQuestion] = useState("");
   const [username, setUsername] = useState("");
   const [currentStep, setCurrentStep] = useState(1);

   const navigate = useNavigate();

   useEffect(() => {
      setCurrentStep(1);
   }, []);

   const getQuestion = async ({ username }) => {
      setUsername(username);
      getSecurityQuestion(username)
         .then(({ question }) => {
            if (question) {
               setSecurityQuestion(question);
               setCurrentStep(2);
            } else {
               message.error("User not found");
            }
         })
         .catch(() => {
            message.error("Something went wrong");
         });
   };

   const onLogin = async ({ securityAnswer, password }) => {
      login({ username, securityAnswer, password })
         .then(({ token }) => {
            if (token) {
               localStorage.setItem("jwt-token", token);
               navigate("/");
               navigate(0);
            } else {
               message.error("Security Answer is wrong!");
            }
         })
         .catch(() => {
            message.error("Authentication failure");
         });
   };

   return <div className="background-wrap">{currentStep === 1 ? <LoginStep1 onFormSubmit={getQuestion} /> : <LoginStep2 username={username} question={securityQuestion} onFormSubmit={onLogin} />}</div>;
};

export default Login;
