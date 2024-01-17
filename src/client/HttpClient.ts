export const BASE_API_URL: string =
  // process.env.REACT_APP_BACKEND_URL ??
  "https://opentdb.com";

enum ERequestMethod {
  POST = "POST",
  GET = "GET",
}

interface IServiceRequest {
  url: string;
  method?: string;
  query?: URLSearchParams;
}

class HttpClient {
  constructor(protected readonly apiUrl: string = BASE_API_URL) {}

  private getResponseAsync = async <T>(
    request: IServiceRequest
  ): Promise<T> => {
    const { url, method, query } = request;

    const requestUrl = new URL(url, this.apiUrl);
    if (query) {
      requestUrl.search = `?${query.toString()}`;
    }

    try {
      const response = await fetch(requestUrl, {
        method: method ?? ERequestMethod.GET,
      });

      if (!response.ok) {
        throw Object.assign(
          new Error(`${response.status}: ${response.statusText}`)
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      throw Object.assign(new Error(error as string));
    }
  };

  protected get = async <T>({ url, query }: IServiceRequest): Promise<T> => {
    return this.getResponseAsync<T>({
      method: ERequestMethod.GET,
      url,
      query,
    });
  };

  protected post = async <T>({ url }: IServiceRequest): Promise<T> => {
    return this.getResponseAsync<T>({
      method: ERequestMethod.POST,
      url,
    });
  };
}

export default HttpClient;
