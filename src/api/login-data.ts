import axios from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export const setUser = async (data: LoginData): Promise<void> => {
  try {
    const response = await axios.post("/api/v1/auth/signin", data);

    // Пробуем получить токен из заголовков или из данных
    if (response.status === 200) {
      localStorage.setItem("token", "TOKEN");
    }
  } catch (error) {
    console.error("Ошибка при попытке входа в систему:", error);
    throw error;
  }
};
