import React from "react";
import { nanoid } from '@reduxjs/toolkit';
import styles from './popupHistoryReport.module.css';
import { Popup } from './popup';
import { Button } from "../button/button";
import { ArrowRightIcon } from "../icons";
import { StatusLabel } from "../status-label/status-label";

interface IPopupHistoryReportProps {
  isPopapOpen: boolean;
  closePopup: () => void;
  dataAboutReports: {[name: string]: string}[];
}
type TStatusLabelOptions = {
  icon: "CircleStopIcon" | "CircleCheckIcon" | "CircleWarningIcon";
  statusText: string;
  type: "rejected" | "approved" | "review";
};

export const PopupHistoryReport = ({
                                    isPopapOpen, 
                                    closePopup,
                                    dataAboutReports
                                   }: IPopupHistoryReportProps) => {

  // формирование списка данных об отчетах по заданию
  const liste: JSX.Element[] = dataAboutReports.reduce((accumulator, item) => {
    const uuid = nanoid();
    // формирование строки с датой получения отчета
    const reportDate = () => {
      const partOfDate = item.report_date.split('-');
      return (`${partOfDate[2]}.${partOfDate[1]}.${partOfDate[0].slice(2)}`);
    };
    // определение параметров отражения результата рассмотрения отчета
    const reportStatus = item.status;
    const statusLabelOptions: TStatusLabelOptions = {
      icon: "CircleStopIcon",
      statusText: '',
      type: "rejected",
    };
    switch (reportStatus) {
      case "rejected":
        statusLabelOptions.icon = "CircleStopIcon";
        statusLabelOptions.statusText = "Отклонено";
        statusLabelOptions.type = "rejected";
        break
      case "approved":
        statusLabelOptions.icon = "CircleCheckIcon";
        statusLabelOptions.statusText = "Принято";
        statusLabelOptions.type = "approved";
        break
      case "review":
        statusLabelOptions.icon = "CircleWarningIcon";
        statusLabelOptions.statusText = "Ждет проверки";
        statusLabelOptions.type = "review";
        break
      default:
        break;
    }
    ;
    // формирование строки об отчете
    const li = (
      <li className={`text_type_main-medium ${styles.lineInList}`} key={uuid}>
        <span className={styles.spanInLine}>{`Загрузка от ${reportDate()}`}</span>
        <ArrowRightIcon
          size="18"
          type="interface-primary"
        />
        <StatusLabel
          icon={statusLabelOptions.icon}
          statusText={statusLabelOptions.statusText}
          type={statusLabelOptions.type}
          className={styles.externalStatusLabelClass}
        />
      </li>
    );
    accumulator.push(li);
    return accumulator;
  }, [] as JSX.Element[]);

  return (
    <Popup  title='История отправки задания'  
            isPopapOpen={isPopapOpen} 
            closePopup={closePopup}
            externalClassName={styles.externalPopupClas}
    >
      <>
        <ul className={styles.list}>
          {liste}
        </ul>
        <Button
          htmlType="button"
          onClick={closePopup}
          size="small"
          type="secondary"
          className={styles.externalButtonClass}
        >
          Закрыть
        </Button>
      </>
    </Popup>
  )
};