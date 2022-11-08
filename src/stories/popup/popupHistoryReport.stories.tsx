import React, {useState} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PopupHistoryReport } from "../../ui/popup/popupHistoryReport";
import { Button } from "../../ui/button/button";

export default {
  title: 'Popup',
  component: PopupHistoryReport,
  decorators: [(PopupHistoryReport) => (
      <div style={{height: '450px'}}>
        <PopupHistoryReport/>
      </div>
    )
  ],
} as ComponentMeta<typeof PopupHistoryReport>;

export const HistoryReport: ComponentStory<typeof PopupHistoryReport> = () => {
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
      <PopupHistoryReport 
                          isPopapOpen={isPopapOpen} 
                          closePopup={closePopup}
                          dataAboutReports={dataAboutReports}
      />
    </>
  )
}; 