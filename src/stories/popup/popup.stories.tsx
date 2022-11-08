import React, {useState} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popup } from '../../ui/popup/popup';
import { Button } from "../../ui/button/button";

export default {
  title: 'Popup',
  component: Popup,
  decorators: [(Popup) => (
      <div style={{height: '450px'}}>
        <Popup/>
      </div>
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
      <Popup {...args} isPopapOpen={isPopapOpen} closePopup={closePopup}/>
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
() => {
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
      <Popup title='Текст заголовка' isPopapOpen={isPopapOpen} closePopup={closePopup}>
        ...
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