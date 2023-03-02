import styled from 'styled-components';

import { ProgressProvider } from 'context';

import Accordion from 'components/Accordion';

const Container = styled.div``;
const Title = styled.h1``;

const App = () => {
  return (
    <ProgressProvider>
      <Container>
        <Title>Lodgify Grouped Tasks</Title>
        <Accordion />
      </Container>
    </ProgressProvider>
  );
};

export default App;
