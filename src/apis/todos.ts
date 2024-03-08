import axios from "axios";

const dbUrl = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}/toDos`,
});

export type ToDo = {
  id: string;
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

export const addToDos = async (newTodo: NewToDo): Promise<void> => {
  try {
    await dbUrl.post("", newTodo);
  } catch (error) {
    console.error(error);
  }
};

export const deleteToDo = async (id: string): Promise<void> => {
  try {
    await dbUrl.delete(`${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const toggleToDo = async (id: string): Promise<void> => {
  try {
    const todo = await dbUrl.get(`/${id}`);
    console.log(todo);
    await dbUrl.patch(`${id}`, { isDone: !todo.data.isDone });
  } catch (error) {
    console.error(error);
  }
};
