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
      const { question } = await getSecurityQuestion(username);
      setSecurityQuestion(question);
      setCurrentStep(2);
   };

   const onLogin = async ({ securityAnswer, password }) => {
      const { token } = await login({ username, securityAnswer, password });
      localStorage.setItem("jwt-token", token);
      navigate("/");
   };

   return <div className="auth-wrap">{currentStep === 1 ? <LoginStep1 onFormSubmit={getQuestion} /> : <LoginStep2 username={username} question={securityQuestion} onFormSubmit={onLogin} />}</div>;
};

export default Login;
