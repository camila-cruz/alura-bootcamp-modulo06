import { get } from 'lodash';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

interface ButtonProps {
  color: string;
  /**
   * Define se o botão pode receber eventos de clique
   */
  disabled?: boolean;
  /**
   * Conteúdo que será exibido dentro do botão
   */
  children: React.ReactNode;
}

export default function Button({ disabled, children, color }: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} color={color}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  color: 'primary.main',
  disabled: false,
}