import { ILink } from "./ilink";

export interface IList<T> {
  data: T[];
}

export interface IListOptions {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
}


export interface IPaginatedList<T> extends IList<T> {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  last_page_url: string;
  first_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  from: number;
  to: number;
  links: Array<ILink>;
  path: string;
}
