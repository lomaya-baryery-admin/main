import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PopupMessage } from "../../ui/popup/popupMessage";
import { Button } from "../../ui/button/button";

export default {
  title: 'Popup',
  component: PopupMessage,
  decorators: [(PopupMessage) => (
      <div style={{height: '450px'}}>
        <PopupMessage/>
      </div>
    )
  ],
} as ComponentMeta<typeof PopupMessage>;

export const Message: ComponentStory<typeof PopupMessage> = () => {
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
        Финальное сообщение
      </Button>
      < PopupMessage isPopapOpen={isPopapOpen} closePopup={closePopup} />
    </>
  )
}; 