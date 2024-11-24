import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export type CardPostProps = {
  title: string;
  imgUrl: string;
  time: string;
  location: string;
  description: string;
};

export const addCard = async (email: string, data: CardPostProps) => {
  try {
    const response = await axios.post("/event/save/" + email, data);
    if (response.status != 200) {
      throw error;
    }
  } catch (error) {
    console.error("Ошибка при попытке обработки данных:", error);
    throw error;
  }
};

export const editCard = async (id: string, data: CardPostProps) => {
  try {
    const response = await axios.patch("/event/" + id, data);
    if (response.status != 200) {
      throw error;
    }
  } catch (error) {
    console.error("Ошибка при попытке обработки данных:", error);
    throw error;
  }
};
