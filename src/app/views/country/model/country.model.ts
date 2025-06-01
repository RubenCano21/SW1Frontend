
export interface Country {
  id: number;
  name: string;
  code: string;
}

export interface CountryListResponse {
  countries: Country[];
  total: number;
  skip: number;
  limit: number;
}
