import httpRequest from "@/auth/http-client";
import { buildPaginationQuery } from "@/helpers/request-helpers";
import { ICourse } from "@/interfaces/course.interfaces";
import { IFilter } from "@/types/filter.types";
import { PaginatedResponse, RequestPagination } from "@/types/requests.types";

class CourseService {
  private baseUrl = "/api/courses/";

  async getAll(): Promise<PaginatedResponse<ICourse>> {
    const courses = await httpRequest.get(`${this.baseUrl}`);
    return courses;
  }

  async filter(
    filter: IFilter<ICourse>[],
    pagination: RequestPagination
  ): Promise<PaginatedResponse<ICourse>> {
    const paginationQuery = buildPaginationQuery(pagination);

    const response = await httpRequest.post(`${this.baseUrl}/filter?${paginationQuery}`, {
      filter,
    });

    return response;
  }

  async getById(courseId: string): Promise<ICourse> {
    const course = await httpRequest.get(`${this.baseUrl}${courseId}`);
    return course;
  }

  async create(formData: ICourse): Promise<void> {
    await httpRequest.post(this.baseUrl, formData);
  }

  async update(formData: ICourse, courseId: string): Promise<void> {
    await httpRequest.put(`${this.baseUrl}${courseId}`, formData);
  }

  async delete(courseId: string): Promise<void> {
    await httpRequest.delete(`${this.baseUrl}${courseId}`);
  }
}

const courseService = new CourseService();
export default courseService;
