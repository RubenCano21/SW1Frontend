export interface Vote {
  id?: number;
  date: string; // ISO date string, e.g., '2024-06-10'
  electionTitle: string;
  candidateName: string;
  ballotCode: string;
  securityHash?: string;
  transactionHash?: string;
  blockNumber?: number;
  ballotId: number;
  candidateId: number;
  positionId: number;
  politicalOrganizationId?: number;
}
