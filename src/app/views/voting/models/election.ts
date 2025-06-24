type ElectionStatus = 'pending' | 'confirmed' | 'inprogress' | 'cancelled' | 'finished' | 'deleted';
type ElectionMode = 'online' | 'offline'; // Adjust as needed

export interface Eleccion {
  id: number;
  title: string;
  description?: string;

  minimum_age?: number;
  maximum_age?: number;
  status: ElectionStatus;
  start_datetime?: string; // ISO string
  end_datetime?: string;   // ISO string
  timezone: string;

  mode: ElectionMode;
  show_results_in_real_time: boolean;
  allow_multiple_votes: boolean;
  anonymous_voting: boolean;
  authenticated_voters_only: boolean;
  max_votes_per_user?: number;

  user_id: number;

  created_at?: string; // ISO string
  updated_at?: string; // ISO string
}
