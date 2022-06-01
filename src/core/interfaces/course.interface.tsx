import CategoryType from "../enum/category-type.enum";

export interface ICourses {
  index?: number
  name: string
  precio: number
  avatar: string
  status: boolean
  category: CategoryType;
  description?: string
  owner?: IIwner
}

export interface IIwner {
  avatar_url: string;
}