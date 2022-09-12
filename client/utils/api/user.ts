import { AxiosInstance } from "axios";
import { ResponseUser } from "../../redux/auth/types";
import { CreateUserDto, LoginDto } from "./types";

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>(
      "auth/register",
      dto
    );
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post<LoginDto, { data: ResponseUser }>(
      "auth/login",
      dto
    );
    return data;
  },

  async getMe() {
    const { data } = await instance.get<ResponseUser>("/users/me");
    return data;
  },

  async upload(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await instance.post("/users/upload", formData);
    return data;
  },

  async updateUser(id: number, dto: CreateUserDto) {
    const { data } = await instance.patch<
      CreateUserDto,
      { data: ResponseUser }
    >(`/users/${id}`, dto);
    return data;
  },

  async getAllUsers() {
    const { data } = await instance.get<ResponseUser[]>("/users/");
    return data;
  },

  async getOne(id: number) {
    const { data } = await instance.get<ResponseUser>(`/users/${id}`);
    return data;
  },
});
