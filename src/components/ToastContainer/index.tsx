import React from 'react';

import { ToastState } from '../../hooks/toast';

import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastState[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
