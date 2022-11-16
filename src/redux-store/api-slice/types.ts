export interface IdefaultObject {
  answer: string;
}

export interface IshiftCreate {
  started_at: string;
  finished_at: string;
}

export interface IResponceShifts extends IshiftCreate {
  id: string;
  status: 'started' | 'finished' | 'preparing' | 'cancelled' | '';
}

export interface IInformation {
  id: string;
  status: 'started' | 'finished' | 'preparing' | 'cancelled';
  started_at: string;
  finished_at: string;
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
  status: 'pending' | 'approved' | 'declined';
}
