import axios from "axios";

const dbUrl = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}/toDos`,
});

export type ToDo = {
  id: number;
  title: string;
  content: string;
  created: number;
  isDone: boolean;
};

export type NewToDo = {
  title: string;
  content: string;
  created: number;
  isDone: boolean;
};

export const getToDos = async (): Promise<ToDo[]> => {
  try {
    const response = await dbUrl.get("");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching ToDos:", error);
    return [];
  }
};

export const addToDos = async (newTodo: NewToDo) => {
  try {
    await dbUrl.post("", newTodo);
  } catch (error) {
    console.error(error);
  }
};
