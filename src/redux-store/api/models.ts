export interface IUser {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone: string;
}

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
  final_message: string;
}

export type TUpdateShiftSettings = Partial<ICreateShift> & {
  shiftId: string;
};

export interface IUserTask {
  task_id: string;
  status: 'under_review' | 'approved' | 'declined';
  task_date: string;
}

export interface IShiftUser extends IUser {
  user_tasks: IUserTask[];
}

export interface IShiftUsers extends IShift {
  users: IShiftUser[];
}

export type TRequestStatus = 'pending' | 'approved' | 'declined';

export interface IRequest extends IUser {
  id: string; //for production rename on request_id
  status: TRequestStatus;
}
