import React, {useState, useRef} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CSSTransition } from "react-transition-group";
import { PopupHistoryReport } from 
  "../../components/popupHistoryReport/popupHistoryReport";
import { Button } from "../../ui/button/button";

export default {
  title: 'Popup',
  component: PopupHistoryReport,
  decorators: [(PopupHistoryReport) => (
      <>
        <div id='app-root' style={{height: '450px'}}>
          <PopupHistoryReport/>
        </div>
        <div id='modal-root'/>
      </>
    )
  ],
} as ComponentMeta<typeof PopupHistoryReport>;

const Template: ComponentStory<typeof PopupHistoryReport> = () => {
  const dataAboutReports = [
    {
      "report_date": "2022-11-04",
      "status": "rejected"
    },
    {
        "report_date": "2022-11-04",
        "status": "approved"
    },
    {
        "report_date": "2022-11-04",
        "status": "review"
    },
  ];
  const [isPopapOpen, setIsPopapOpen] = useState<boolean>(false);
  const openPopup = () => setIsPopapOpen(true);
  const closePopup = () => setIsPopapOpen(false);
  const popapRef = useRef(null);
  return (
    <>
      <Button
        htmlType="button"
        onClick={openPopup}
        size="small"
        type="secondary"
      >
        История отправки
      </Button>
      <CSSTransition
        nodeRef={popapRef}
        in={isPopapOpen}
        timeout={400}
        classNames='smooth-popup'
        unmountOnExit
      >
        <PopupHistoryReport 
          closePopup={closePopup}
          dataAboutReports={dataAboutReports}
          ref={popapRef}
        />
      </CSSTransition>
    </>
  )
}; 

export const HistoryReport = Template.bind({});

HistoryReport.parameters = {
  docs: {
    source: {
      code: `//пример использования
        
import React, {useState, useRef} from "react";
import { CSSTransition } from "react-transition-group";
import { PopupHistoryReport } from 
  "../../components/popupHistoryReport/popupHistoryReport";
import { Button } from "../../ui/button/button";

const myComponent = () => {
  const dataAboutReports = [
    {
      "report_date": "2022-11-04",
      "status": "rejected"
    },
    {
        "report_date": "2022-11-04",
        "status": "approved"
    },
    {
        "report_date": "2022-11-04",
        "status": "review"
    },
  ];
  const [isPopapOpen, setIsPopapOpen] = useState<boolean>(false);
  const openPopup = () => setIsPopapOpen(true);
  const closePopup = () => setIsPopapOpen(false);
  const popapRef = useRef(null);
  return (
    <>
      <Button
        htmlType="button"
        onClick={openPopup}
        size="small"
        type="secondary"
      >
        История отправки
      </Button>
      <CSSTransition
        nodeRef={popapRef}
        in={isPopapOpen}
        timeout={400}
        classNames='smooth-popup'
        unmountOnExit
      >
        <PopupHistoryReport 
          closePopup={closePopup}
          dataAboutReports={dataAboutReports}
          ref={popapRef}
        />
      </CSSTransition>
    </>
  )
}
      `,
      language: 'tsx',
      type: 'auto',
    },
  },
};