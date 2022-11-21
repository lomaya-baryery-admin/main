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
  page: number;
  total_page: number;
  shifts: IShift[];
}

export interface ICreateShift {
  title: string;
  started_at: Date;
  finished_at: Date;
}

export type TUpdateShiftSettings = Partial<ICreateShift> & {
  shiftId: string;
};

export interface IUserTask {
  task_id: string;
  status: 'under_review' | 'approved' | 'declined';
  task_date: string; //"2022-09-09T09:10:19.890Z"
}

export interface IShiftUser {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone: string;
  user_tasks: IUserTask[];
}

export interface IShiftUsers extends IShift {
  users: IShiftUser[];
}
