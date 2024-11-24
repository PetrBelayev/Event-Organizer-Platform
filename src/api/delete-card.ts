import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export const deleteCard = async (id: number) => {
  try {
    const response = await axios.delete("/event/" + id.toString());
    if (response.status != 200) {
      throw error;
    }
  } catch (error) {
    console.error("Ошибка при попытке обработки данных:", error);
    throw error;
  }
};
