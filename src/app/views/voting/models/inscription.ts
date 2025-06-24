export interface Inscription {
  isElected: boolean;
  electedTime?: string; // ISO date string or null
  color?: string | null;
  backgroundImage?: string | null;
  customConfig?: string | null;

  candidateId: number;
  ballotId: number;
  politicalOrganizationId: number;
  positionId: number;
}
