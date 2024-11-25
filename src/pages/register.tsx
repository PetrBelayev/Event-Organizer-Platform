import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginData } from "../api/login-data";
import error = Simulate.error;
import { Simulate } from "react-dom/test-utils";
import { setNewUser } from "../api/register-data";

const Register = () => {
  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState<boolean>(false);
  const [mistakesSet, setMistakesSet] = useState<boolean>(false);

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const doNavigation = async () => {
    try {
      const data: LoginData = {
        email: login,
        password: password,
      };

      const res = validation(data);

      if (!res) {
        setMistakesSet(true);
        setTimeout(() => {
          setMistakesSet(false);
        }, 3500);
        return;
      }

      await setNewUser(data);

      navigate("/");
    } catch (error) {
      setMistakes(true);
      setTimeout(() => {
        setMistakes(false);
      }, 3500);
    }
  };

  const validation = (data: LoginData): boolean => {
    const englishOnlyRegex = /^[A-Za-z0-9@._-]+$/;

    if (data.password != password2) {
      return false;
    }

    if (
      data.email &&
      data.password &&
      !data.email.includes(" ") &&
      englishOnlyRegex.test(data.email) &&
      englishOnlyRegex.test(data.password)
    ) {
      return true;
    }

    throw error;
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 onClick={() => navigate("/")}>
          {"<- Register in EVENT ORGANISER"}
        </h1>
        <label>Set login</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label>Set password</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Repeat password</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button onClick={doNavigation}>Register</button>

        <h2
          className="error-log"
          style={mistakes ? { opacity: 100 } : { opacity: 0 }}
        >
          Use only english letters!
        </h2>

        <h2
          className="error-log"
          style={mistakesSet ? { opacity: 100 } : { opacity: 0 }}
        >
          Passwords does not match!
        </h2>
      </div>
    </div>
  );
};

export default Register;
