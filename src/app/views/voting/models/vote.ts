export interface Vote {
  id?: number;
  date: string; // ISO date string, e.g., '2024-06-10'
  election_title: string;
  candidate_name: string;
  ballot_code?: string;
  security_hash?: string;
  transaction_hash?: string;
  block_number?: number;
  ballot_id: number;
  candidate_id: number;
  position_id: number;
  political_organization_id?: number;
}
