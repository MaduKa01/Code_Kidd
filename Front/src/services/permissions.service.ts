import httpRequest from "@/auth/http-client";
import { buildPaginationQuery } from "@/helpers/request-helpers";
import { IInsertUserProfile, IProfile } from "@/interfaces/permission.interfaces";
import { PaginatedResponse, RequestPagination } from "@/types/requests.types";

class PermissionService {
  private baseProfile = "/backoffice/v1/profile";
  private baseUserProfile = "/backoffice/v1/userprofile";

  async getAllProfiles(pagination: RequestPagination): Promise<PaginatedResponse<IProfile>> {
    const paginationQuery = buildPaginationQuery(pagination);
    const products = await httpRequest.get(`${this.baseProfile}?${paginationQuery}`);
    return products;
  }
  async insertUserProfile(formData: IInsertUserProfile): Promise<void> {
    await httpRequest.post(`${this.baseUserProfile}`, formData);
  }
  async removeUserProfile(userId: number, profileId: number): Promise<void> {
    await httpRequest.delete(`${this.baseUserProfile}/${userId}/${profileId}`);
  }
}

const permissionService = new PermissionService();
export default permissionService;
