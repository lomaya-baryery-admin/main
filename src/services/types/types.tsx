export interface INavbarElement {
  name: string;
  link: string;
  section: string;
}
export interface ISlaider {
  text: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
  children?: JSX.Element;
  linkActive: string;
}

export type TShifts = {
  id: string;
  title: string;
  final_message: string;
  status: string;
  started_at: Date;
  finished_at: Date;
  total_users: number;
  page: number;
  total_page: number;
  users: TUsers[];
};

export type TUsers = {
  user_id: string;
  name: string;
  surname: string;
  date_of_birth: number;
  city: string;
  phone: string;
  user_tasks: TUserTasks[];
};

export type TUserTasks = {
  user_task_id: string;
  status: string;
  task_date: Date;
};
