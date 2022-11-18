import { IShiftConfigFormProps } from '.';
import { ICurrentShiftState } from '../../redux-store/current-shifts';

export function getTitle(
  shiftStatus: IShiftConfigFormProps['shiftStatus'],
  currentShifts: ICurrentShiftState
): string {
  switch (shiftStatus) {
    case 'creating':
      return '';
    case 'preparing':
      return currentShifts.preparing?.title || '';
    case 'started':
      return currentShifts.started?.title || '';
    default:
      const _exhaustive: never = shiftStatus;
      return '';
  }
}

interface ICreateAndStartedProps {
  formType: 'creating' | 'started';
  startedStartAt: string | undefined;
  startedFinishAt: string | undefined;
}

interface IPreparingProps {
  formType: 'preparing';
  preparingStartAt: string | undefined;
  preparingFinishAt: string | undefined;
  startedStartAt: string | undefined;
  startedFinishAt: string | undefined;
}

function isPreparing(prop: ICreateAndStartedProps | IPreparingProps): prop is IPreparingProps {
  return prop.formType === 'preparing';
}

export function getStartDate(props: ICreateAndStartedProps | IPreparingProps) {
  if (isPreparing(props)) {
    return new Date(1986, 11, 1); //for debugging
  } else {
    const { formType, startedFinishAt, startedStartAt } = props;
    let startDate: Date = new Date();

    if (formType === 'creating' && startedFinishAt) {
      startDate = new Date(startedFinishAt);
      startDate.setDate(startDate.getDate() + 1);
    } else if (formType === 'started') {
      startDate = startedStartAt ? new Date(startedStartAt) : startDate;
    }
    startDate.setHours(0, 0, 0, 0);
    return startDate;
  }
}

export function getFinishDate(props: ICreateAndStartedProps | IPreparingProps) {
  if (isPreparing(props)) {
    return new Date(1986, 11, 1); //for debugging
  } else {
    const { formType, startedFinishAt } = props;

    let finishDate: Date = new Date();

    finishDate.setDate(finishDate.getDate() + 1);

    if (formType === 'creating' && startedFinishAt) {
      finishDate = new Date(startedFinishAt);
      finishDate.setDate(finishDate.getDate() + 2);
    } else if (formType === 'started') {
      finishDate = startedFinishAt ? new Date(startedFinishAt) : finishDate;
    }
    finishDate.setHours(0, 0, 0, 0);
    return finishDate;
  }
}

export function getDiffInDays(finish: Date, start: Date): number {
  return (finish.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1;
}

export const validateLength = (str: string, min: number, max: number): boolean => {
  const string = str.trim();

  if (string.length < min || string.length > max) {
    return false;
  }

  return true;
};
