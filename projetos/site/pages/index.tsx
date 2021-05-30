import styled from 'styled-components';
import Button from '@camila-cruz/ui/src/components/Button';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <Title>
      Minha página
      <Button>
        Um botão
      </Button>
    </Title>
  );
}
