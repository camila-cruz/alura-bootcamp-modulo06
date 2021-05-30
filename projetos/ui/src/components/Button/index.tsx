import React from 'react';

interface ButtonProps {
  /**
   * Define se o botão pode receber eventos de clique
   */
  disabled?: boolean;
  /**
   * Conteúdo que será exibido dentro do botão
   */
  children: React.ReactNode;
}

export default function Button({ disabled, children }: ButtonProps) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
}