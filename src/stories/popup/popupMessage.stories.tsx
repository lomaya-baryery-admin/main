import { useState, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CSSTransition } from 'react-transition-group';
import { PopupMessage } from '../../components/popupMessage/popupMessage';
import { Button } from '../../ui/button/button';

export default {
  title: 'Popup',
  component: PopupMessage,
  decorators: [
    (Story) => (
      <>
        <div id="app-root" style={{ height: '450px' }}>
          <Story />
        </div>
        <div id="modal-root" />
      </>
    ),
  ],
} as ComponentMeta<typeof PopupMessage>;

const Template: ComponentStory<typeof PopupMessage> = () => {
  const [isPopapOpen, setIsPopapOpen] = useState<boolean>(false);
  const openPopup = () => setIsPopapOpen(true);
  const closePopup = () => setIsPopapOpen(false);
  const popapRef = useRef(null);
  return (
    <>
      <Button htmlType="button" onClick={openPopup} size="small" type="secondary">
        Финальное сообщение
      </Button>
      <CSSTransition
        nodeRef={popapRef}
        in={isPopapOpen}
        timeout={250}
        classNames="smooth-popup"
        unmountOnExit
      >
        <PopupMessage closePopup={closePopup} ref={popapRef} />
      </CSSTransition>
    </>
  );
};

export const Message = Template.bind({});
Message.parameters = {
  docs: {
    source: {
      code: `//пример использования
        
import React, {useState, useRef} from "react";
import { CSSTransition } from "react-transition-group";
import { PopupMessage } from "../../components/popupMessage/popupMessage";
import { Button } from "../../ui/button/button";

const myComponent = () => {
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
        Финальное сообщение
      </Button>
      <CSSTransition
        nodeRef={popapRef}
        in={isPopapOpen}
        timeout={250}
        classNames='smooth-popup'
        unmountOnExit
      >
        < PopupMessage 
          closePopup={closePopup} 
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
