import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toggleToDo } from "../apis/todos";
import { deleteToDo } from "../apis/todos";

export const useToggleToDoMutation = () => {
  const queryClient = useQueryClient();
  const ToggleToDoMutation = useMutation({
    mutationFn: toggleToDo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["toDos"] });
    },
  });
  const handleToggle = (id: string) => {
    ToggleToDoMutation.mutate(id);
  };
  return { handleToggle };
};

export const useDeleteToDoMutation = () => {
  const queryClient = useQueryClient();
  const deleteToDoMutation = useMutation({
    mutationFn: deleteToDo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["toDos"] });
    },
  });
  const handleDelete = (id: string) => {
    deleteToDoMutation.mutate(id);
  };
  return { handleDelete };
};
