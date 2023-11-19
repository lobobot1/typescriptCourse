import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Size = 'small' | 'medium' | 'large';
export type UserId = string | number;

export interface Product extends BaseModel {
    title: string;
    stock: number;
    sizes?: Size;
    category: Category;
  };