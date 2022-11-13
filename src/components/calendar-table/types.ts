import { IIconProps } from '../../ui/icons/utils';
import { TTooltipHOC } from '../../ui/tooltip/tooltip';

export type TTaskStatus = 'under_review' | 'approved' | 'declined';
export interface ITaskData {
  date: string;
  status: TTaskStatus;
}

export type ITableData = ITaskData[];

export interface IStatusIcons {
  [key: string]: (arg: IIconProps & TTooltipHOC) => JSX.Element;
}

export interface ITasksCount {
  approved: number;
  declined: number;
  under_review: number;
}

export type TTableBlock = 'title' | 'firstColumn' | 'lastColumn' | 'header';

export interface IIconColors {
  [key: string]: 'pending' | 'success' | 'error';
}
