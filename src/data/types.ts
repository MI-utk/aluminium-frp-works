export interface ProductSpec {
  alloy: string;
  temper?: string;
  thickness?: string;
  diameter?: string;
  width?: string;
  length?: string;
  coilId?: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  specifications: ProductSpec[];
  applications: string[];
  image: string;
}