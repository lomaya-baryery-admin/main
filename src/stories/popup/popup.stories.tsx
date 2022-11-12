import React, {useState, useRef} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CSSTransition } from "react-transition-group";
import { Popup } from '../../ui/popup/popup';
import { Button } from "../../ui/button/button";

export default {
  title: 'Popup',
  component: Popup,
  decorators: [(Popup) => (
      <>
        <div id='app-root' style={{ height: '450px' }}>
          <Popup />
        </div>
        <div id='modal-root' />
      </>
    )
  ],
  argTypes: {
    isPopapOpen: {
      control: {
        type: null
      }
    }
  }
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => {
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
        type="primary"
      >
        Открыть модальное окно
      </Button>
      <CSSTransition
        nodeRef={popapRef}
        in={isPopapOpen}
        timeout={400}
        classNames='smooth-popup'
        unmountOnExit
      >
        <Popup {...args} closePopup={closePopup} ref={popapRef}/>
      </CSSTransition>
    </>
  )
};

export const Base = Template.bind({});
Base.args = {
  title: 'Введите текст'
}

Base.parameters = {
  docs: {
    source: {
      code: `//пример использования
        
import React, {useState, useRef} from "react";
import { CSSTransition } from "react-transition-group";
import { Popup } from '../../ui/popup/popup';
import { Button } from "../../ui/button/button";

const myComponent = () => {
  const [isPopapOpen, setIsPopapOpen] = useState<boolean>(false);
  const openPopup = () => setIsPopapOpen(true);
  const closePopup = () => setIsPopapOpen(false);
  return (
    <>
      <Button
        htmlType="button"
        onClick={openPopup}
        size="small"
        type="primary"
      >
        Открыть модальное окно
      </Button>
      <Popup 
        title='Текст заголовка' 
        isPopapOpen={isPopapOpen} 
        closePopup={closePopup}
      >
        {/* Ваш код содержания модального окна*/}
      <Popup/>
    </>
  )
}
      `,
      language: 'tsx',
      type: 'auto',
    },
  },
};