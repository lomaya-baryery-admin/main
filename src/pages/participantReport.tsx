import React, {FC} from 'react';
import participantReportStyle from './participantReport.module.css';
import imageDefault from "../ui/preview/image5.jpg";
import imageSmallDefault from "./images/imgSmall.jpg"
import {Button} from "../ui/button/button";
import {ArrowLeftIcon, ArrowRightIcon, CheckIcon, CloseIcon} from "../ui/icons";

const ParticipantReport: FC = () => {
    return (
        <section className={participantReportStyle.container}>
            <p className={participantReportStyle.touch}>Отчёты участников / Название задания</p>
            <h2 className={participantReportStyle.header}>Название задания</h2>
            <h3 className={participantReportStyle.player}>Участник</h3>
            <p className={participantReportStyle.send}>Отправлено</p>
            <p className={participantReportStyle.name}>Ivanov Ivanov</p>
            <p className={participantReportStyle.time}> 00.00.00 b 00.00 </p>
            <Button htmlType={'button'} type="secondary" size={'small'} className={participantReportStyle.buttonHistory}>
                История отправки
            </Button>
            <Button htmlType={'button'} size={'large'} className={participantReportStyle.buttonAccept}>
                <CheckIcon type="interface-white" />
                Одобрить
            </Button>
            <Button htmlType={'button'} size={'large'} className={participantReportStyle.buttonCancel}>
                <CloseIcon type="interface-white" />
                Отклонить
            </Button>
            <div className={participantReportStyle.image}>
                <img alt={imageSmallDefault} src={imageSmallDefault} className={participantReportStyle.smallImg} />
                <img alt={imageDefault} src={imageDefault} className={participantReportStyle.pictureImg}/>
            </div>
            <Button htmlType={'button'} type="secondary" size={'small'} className={participantReportStyle.buttonLeft}>
                <ArrowLeftIcon type="link-active"/>
                Предыдущее задание
            </Button>
            <Button htmlType={'button'} type="secondary" size={'small'} className={participantReportStyle.buttonRight}>
                Следующее задание
                <ArrowRightIcon type="link-active"/>
            </Button>

        </section>
    )
}

export default ParticipantReport;