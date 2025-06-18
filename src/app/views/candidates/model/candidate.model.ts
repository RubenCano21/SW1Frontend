export enum CandidateStatus {
  PENDING = 'PENDING',
  ACCTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface Candidate {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  birth_date: string;
  nationality_id: number;
  residence_id: number;
  user_id?: number;
  status: CandidateStatus;
}
