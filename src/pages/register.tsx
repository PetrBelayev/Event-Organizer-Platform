import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginData } from "../api/login-data";
import error = Simulate.error;
import { Simulate } from "react-dom/test-utils";
import { setNewUser } from "../api/register-data";

const Register = () => {
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
    const englishOnlyRegex = /^[A-Za-z0-9@._-]+$/; // Разрешены только английские буквы, цифры и символы @._-

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
          {"<- Регистрация в EVENT ORGANISER"}
        </h1>
        <label>Придумайте логин</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)} // Обновление состояния login
        />

        <label>Придумайте пароль</label>
        <input
          style={
            mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
          }
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Обновление состояния password
        />

        <button onClick={doNavigation}>Зарегистрироваться</button>

        <h2
          className="error-log"
          style={mistakes ? { opacity: 100 } : { opacity: 0 }}
        >
          В пароле и логине не должно быть русских букв или пробелов!
        </h2>
      </div>
    </div>
  );
};

export default Register;
