import api from "@/utils/api";

type Props = {
  id: number;
  data: {
    name: string;
  };
};

export const patchCurrentUser = async ({ id, data }: Props) => {
  const response = await api.patch(`/users/${id}/`, data);
  return response.data;
};
