import "../styles/loginstyles.css";
import {useNavigate} from "react-router-dom";
import Logo from "../images/logo-white.svg"
import {useState} from "react";
import {LoginData, setUser} from "../api/login-data";


const LoginPage = () => {
    const navigate = useNavigate();
    const [mistakes, setMistakes] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const doNavigation = async () => {
        try {
            const data: LoginData = {
                email: login,
                password: password,
            }

            await setUser(data);
            navigate("/something");

        } catch (error) {
            console.log(error);
            setMistakes(true);
            setTimeout(() => {
                setMistakes(false);
            }, 3500);
        }
    };

    return (
        <div className="login-wrapper">
            <img src={Logo} alt="VK&Techaas" className="login-image"/>
            <div className="login-container">
                <h1>Войти</h1>
                <label>Логин</label>
                <input style={mistakes ? {borderColor: "#A62800"} : {borderColor: "#FFFFFF"}}
                       type="text"
                       value={login}
                       onChange={(e) => setLogin(e.target.value)} // Обновление состояния login
                />

                <label>Пароль</label>
                <input style={mistakes ? {borderColor: "#A62800"} : {borderColor: "#FFFFFF"}}
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)} // Обновление состояния password
                />

                <div className="forgot-password">Забыли пароль?</div>

                <button onClick={doNavigation}>Войти</button>

                <h2 className="error-log" style={mistakes ? {opacity: 100} : {opacity: 0}}>Проверьте свой ввод)</h2>


            </div>
        </div>
    );
};

export default LoginPage;
