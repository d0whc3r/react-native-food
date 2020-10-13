export interface ApiCall {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: { [key: string]: any };
  headers?: RequestInit['headers'];
}

export default class Api {
  private static readonly clientId = process.env.CLIENT_ID;
  private static readonly apiKey = process.env.API_KEY;
  private static readonly baseUrl = 'https://api.yelp.com/v3/businesses';
  private static readonly headers: RequestInit['headers'] = {
    Authorization: Api.apiKey!
  };

  private static getUrl(path: string, params?: object) {
    const url = new URL(this.baseUrl + path);
    if (params) {
      // Object.entries(params).forEach(([key, value]) => {
      //   url.searchParams.set(key, value);
      // });
      url.search = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    }
    return url.toString();
  }

  public static call<T>(path: string, { method = 'GET', params, headers = {} }: ApiCall = {}) {
    return fetch(this.getUrl(path, params), {
      method,
      headers: { ...headers, ...this.headers }
    }).then<T>((response) => response.json());
  }
}
