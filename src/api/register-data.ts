import axios from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export const setNewUser = async (data: LoginData): Promise<void> => {
  try {
    const response = await axios.post("/user/save", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) return;
  } catch (error) {
    console.error("Ошибка при попытке входа в систему:", error);
    throw error;
  }
};
