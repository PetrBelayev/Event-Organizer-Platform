import "../styles/loginstyles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginData, setUser } from "../api/login-data";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const LoginPage = () => {
  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doNavigation = async () => {
    try {
      const data: LoginData = {
        email: login,
        password: password,
      };

      validation(data);
      await setUser(data);

      navigate("/main-page");
    } catch (error) {
      setMistakes(true);
      setTimeout(() => {
        setMistakes(false);
      }, 3500);
    }
  };

  const validation = (data: LoginData) => {
    if (data.email && data.password && !data.email.includes(" ")) {
      return true;
    }
    throw error;
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>EVENT ORGANISER</h1>
        <label>Login</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)} // Обновление состояния login
        />

        <label>Password</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Обновление состояния password
        />

        <div className="forgot-password" onClick={() => navigate("/register")}>
          Do not have an account? Sign up!
        </div>

        <button onClick={doNavigation}>Log in</button>

        <h2
          className="error-log"
          style={mistakes ? { opacity: 100 } : { opacity: 0 }}
        >
          User doesn`t exist!
        </h2>
      </div>
    </div>
  );
};

export default LoginPage;
