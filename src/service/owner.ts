import { IDemo } from "../redux/demo/interfaces";
import { http } from "./http";

export const fetchOwner = async (id: number): Promise<IDemo[]> => {
  return await http.get(`/owner/${id}`);
};

export const fetchAllOwner = async (): Promise<IDemo[]> => {
  return await http.get("/owner");
};
