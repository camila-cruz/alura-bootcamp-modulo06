import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWrapper';

interface ButtonBaseProps {
  /**
   * Define se o botão pode receber eventos de clique
   */
  disabled?: boolean;
  /**
   * Conteúdo que será exibido dentro do botão
   */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ButtonProps = ButtonWrapperProps & ButtonBaseProps;

export default function Button({ disabled, children, color, onClick }: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} color={color} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  color: 'primary.main',
  disabled: false,
}