import React, {FC} from 'react';
import participantReportStyle from './participantReport.module.css';
import {Preview} from "../ui/preview/preview";
import imageDefault from "../ui/preview/image5.jpg";
import imageSmallDefault from "./images/imgSmall.jpg"

const ParticipantReport = () => {
    return (
        <section className={participantReportStyle.container}>
            <p className={participantReportStyle.touch}>Отчёты участников / Название задания</p>
            <h2 className={participantReportStyle.header}>Название задания</h2>
            {/*<div className={participantReportStyle.information}>*/}
                {/*<div className={participantReportStyle.user}>*/}
                    <h3 className={participantReportStyle.player}>Участник</h3>
                    <p className={participantReportStyle.send}>Отправлено</p>
                    <p className={participantReportStyle.name}>Ivanov Ivanov</p>
                    <p className={participantReportStyle.time}> 00.00.00 b 00.00 </p>
            <div className={participantReportStyle.image}>
                {/*<Preview image={imageDefault}   />*/}
                <img alt={imageSmallDefault} src={imageSmallDefault} className={participantReportStyle.smallImg} />
                <img alt={imageDefault} src={imageDefault} className={participantReportStyle.pictureImg}/>
            </div>

                {/*</div>*/}
            {/*</div>*/}

            {/*<div className={participantReportStyle.views}>*/}

            {/*</div>*/}

            {/*<div className={participantReportStyle.bottom}>*/}

            {/*</div>*/}
        </section>
    )
}

export default ParticipantReport;