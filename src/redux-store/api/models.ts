export type TShiftStatus = 'started' | 'finished' | 'preparing';

export interface IShift {
  id: string;
  status: TShiftStatus;
  title: string;
  final_message: string;
  started_at: string;
  finished_at: string;
  total_users: number;
}

export interface IShifts {
  page: 1;
  total_page: 10;
  shifts: IShift[];
}
