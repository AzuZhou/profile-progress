import styled from 'styled-components';

import { ProgressProvider } from 'context';

import { styles } from 'styles/constants';

import Accordion from 'components/Accordion';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${styles.colors.white};
  padding: ${styles.padding.mobile};
  margin: ${styles.padding.mobile};
  border-radius: ${styles.borderRadius.standard};
  border: 1px solid ${styles.colors.grey};
  font-size: ${styles.fontSizes.s};

  @media only screen and (min-width: 720px) {
    max-width: 600px;
    margin: 0;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
`;

const App = () => {
  return (
    <ProgressProvider>
      <Container>
        <Form>
          <Title>Lodgify Grouped Tasks</Title>
          <Accordion />
        </Form>
      </Container>
    </ProgressProvider>
  );
};

export default App;
