import React from 'react';

export interface ITaskData {
  date: string;
  status: 'under_review' | 'approved' | 'declined';
}
export interface IRowData {
  taskStatuses: ITaskData[];
}

export type ITableData = IRowData[];

export interface IStatusIcons {
  [key: string]: React.ReactNode;
}

export interface ITasksCount {
  approved: number;
  declined: number;
  under_review: number;
}

export type TTableBlock = 'title' | 'firstColumn' | 'lastColumn' | 'header';
