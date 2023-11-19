import httpRequest from "@/auth/http-client";
import { buildPaginationQuery } from "@/helpers/request-helpers";
import IUser, { IUserInput } from "@/interfaces/user.interface";
import { IFilter } from "@/types/filter.types";
import { PaginatedResponse, RequestPagination } from "@/types/requests.types";

class UserService {
  private baseUrl = "/api/users/";

  async getAll(pagination: RequestPagination): Promise<PaginatedResponse<IUser>> {
    const paginationQuery = buildPaginationQuery(pagination);

    const users = await httpRequest.get(`${this.baseUrl}?${paginationQuery}`);
    return users;
  }

  async filter(
    filter: IFilter<IUser>[],
    pagination: RequestPagination
  ): Promise<PaginatedResponse<IUser>> {
    const paginationQuery = buildPaginationQuery(pagination);

    const response = await httpRequest.post(`${this.baseUrl}/filter?${paginationQuery}`, {
      filter,
    });

    return response;
  }

  async getById(userId: string): Promise<IUser> {
    const user = await httpRequest.get(`${this.baseUrl}details/${userId}`);
    return user;
  }

  async create(formData: IUserInput): Promise<void> {
    await httpRequest.post(this.baseUrl, formData);
  }

  async update(formData: IUserInput, userId: string): Promise<void> {
    await httpRequest.put(`${this.baseUrl}${userId}`, formData);
  }

  async delete(userId: string): Promise<void> {
    await httpRequest.delete(`${this.baseUrl}${userId}`);
  }
}

const userService = new UserService();
export default userService;
