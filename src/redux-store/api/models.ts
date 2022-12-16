export type TShiftStatus = 'started' | 'finished' | 'preparing' | 'cancelled';

export interface IShift {
  id: string;
  sequence_number: number;
  status: Exclude<TShiftStatus, 'candelled'>;
  title: string;
  final_message: string;
  started_at: string;
  finished_at: string;
  total_users: number;
}

export interface ICreateShift {
  title: string;
  started_at: Date;
  finished_at: Date;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone_number: string;
}

export interface IUserTask {
  task_id: string;
  status: 'under_review' | 'approved' | 'declined';
  task_date: string;
}

export interface IShiftUsers {
  shift: Omit<IShift, 'total_users' | 'sequence_number'>;
  members: {
    id: string;
    status: string;
    reports: IUserTask[];
    user: IUser;
  }[];
}

export type TUpdateShiftSettings = Partial<ICreateShift> & {
  shiftId: string;
};

export type TRequestStatus = 'pending' | 'approved' | 'declined';

export interface IRequest extends IUser {
  id: string; //for production rename on request_id
  status: TRequestStatus;
}

export interface ITask {
  shift_id: string;
  shift_status: TShiftStatus;
  id: string; //for production rename on user_task_id
  user_task_created_at: string;
  user_name: string;
  user_surname: string;
  task_id: string;
  task_description: string;
  task_url: string;
  photo_url: string;
  task_status?: IUserTask['status']; //not in backend response
}
