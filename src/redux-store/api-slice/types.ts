export interface IdefaultObject {
  answer: string;
}

export interface IShiftCreate {
  started_at: string;
  finished_at: string;
  title: string;
}

export type TTaskStatus = 'started' | 'finished' | 'preparing' | 'cancelled';

export interface IResponceShifts extends IShiftCreate {
  id: string;
  status: TTaskStatus;
}

export interface IInformation {
  id: string;
  status: TTaskStatus;
  title: string;
  started_at: string;
  finished_at: string;
}

export interface IShiftData extends IInformation {
  total_users: number;
}

export interface IShifts {
  page: number;
  total_page: number;
  shifts: Array<IShiftData>;
}

// enum ApplicationsStatus {
//   PENDING = 'pending',
//   APPROVED = 'approved',
//   DECLINED = 'declined',
// }



export interface IApplicationsResponce {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: string;
  city: string;
  phone: string;
  request_id: string;
  status: 'pending'|'approved'|'declined';
}