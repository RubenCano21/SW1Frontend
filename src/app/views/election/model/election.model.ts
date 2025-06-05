

enum ElectionStatus {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  INPROGRESS = "Inprogress",
  CANCELLED = "Cancelled",
  FINISHED  = "Finished",
  DELETED = "Deleted"
}

enum ElectionMode {
  PRIVATE = 'Private',
  PUBLIC = 'Public'
}

export interface Election {
  id: number;
  title: string
  description?: string;

  minimum_age?: number;
  maximum_age?: number;
  status: ElectionStatus;
  start_datetime?: string;
  end_datetime?: string;
  timezone: string;

  mode: ElectionMode;
  show_results_in_real_time: boolean;
  allow_multiple_votes: boolean;
  anonymous_voting: boolean;
  authenticated_voters_only: boolean;
  max_votes_per_user?: number;

  user_id: number;

  created_at?: string;
  updated_at?: string;
}
