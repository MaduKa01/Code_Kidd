import axios, { AxiosHeaderValue, AxiosInstance, AxiosRequestConfig, HeadersDefaults } from "axios";

import LOCAL_STORAGE from "@/constants/local-storage";

import configLoader from "./config-loader";

export type TRequestData = Record<never, unknown>;

export type TRequestHeaders = HeadersDefaults & {
  [key: string]: AxiosHeaderValue;
};

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(private baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  public buildHeaders(_accessToken?: string) {
    let accessToken: string | null | undefined = _accessToken;
    if (!_accessToken) {
      accessToken = localStorage ? localStorage.getItem(LOCAL_STORAGE.accessTokenKey) : "";
    }

    // Decodificar o token para obter o CustomerId
    const customerId: string | null = null;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      CustomerId: customerId || "",
    };

    return headers;
  }

  async request<T = never, R = TRequestData>(
    method: string,
    path: string,
    body?: R,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const headers = this.buildHeaders();

    const response = await this.axiosInstance.request<T>({
      method,
      url: path,
      data: body,
      headers,
      ...config,
    });

    return response.data;
  }

  async post<T = never>(
    path: string,
    body?: TRequestData,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const headers = this.buildHeaders();
    return this.request<T>("post", path, body, { headers, ...config });
  }

  async put<T = never>(path: string, body?: TRequestData, config?: AxiosRequestConfig): Promise<T> {
    const headers = this.buildHeaders();
    return this.request<T>("put", path, body, { headers, ...config });
  }

  async get<T = never>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const headers = this.buildHeaders();
    return this.request<T>("get", path, undefined, { headers, ...config });
  }

  async delete<T = never>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const headers = this.buildHeaders();
    return this.request<T>("delete", path, undefined, { headers, ...config });
  }
}

const apiBaseUrl: string = configLoader.get("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);

// Cria uma instância de HttpClient passando o baseUrl
const httpRequest = new HttpClient(apiBaseUrl);

export default httpRequest;
