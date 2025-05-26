export interface Voter {

  name: string;
  lastname: string;
  phone: string;
  identity_document: string;
  birth_date?: string;
  nationality_id: number;
  user_id?: number;
  is_active?: boolean;

}

export interface VoterListResponse {
  voters: Voter[];
  total: number;
  skip: number;
  limit: number;
}
