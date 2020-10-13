// @ts-ignore
import { API_KEY } from '@env';

export interface ApiCall {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  params?: { [key: string]: any };
  headers?: RequestInit['headers'];
}

export default class Api {
  private static readonly apiKey = API_KEY;
  private static readonly baseUrl = 'https://api.yelp.com/v3/businesses';
  private static readonly headers: RequestInit['headers'] = {
    Authorization: `Bearer ${Api.apiKey!}`
  };

  private static getUrl(path: string, params?: object) {
    const url = this.baseUrl + path;
    let par = '';
    if (params) {
      // Object.entries(params).forEach(([key, value]) => {
      //   url.searchParams.set(key, value);
      // });
      par =
        '?' +
        Object.entries(params)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
    }
    return url + par;
  }

  public static call<T>(path: string, { method = 'GET', params, headers = {} }: ApiCall = {}) {
    return fetch(this.getUrl(path, params), {
      method,
      headers: { ...headers, ...this.headers }
    })
      .then(async (response) => {
        if (response.ok) {
          return response;
        } else {
          throw await response.json();
        }
      })
      .then<T>((response) => response.json());
  }

  public static get<T>(path: string, info: Exclude<ApiCall, 'method'>) {
    return this.call<T>(path, { ...info, method: 'GET' });
  }

  public static post<T>(path: string, info: Exclude<ApiCall, 'method'>) {
    return this.call<T>(path, { ...info, method: 'POST' });
  }

  public static put<T>(path: string, info: Exclude<ApiCall, 'method'>) {
    return this.call<T>(path, { ...info, method: 'PUT' });
  }
}
