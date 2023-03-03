import styled from 'styled-components';

import { ProgressProvider } from 'context';

import { styles } from 'styles/constants';

import Accordion from 'components/Accordion';
import Progress from 'components/Progress';

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
  padding: ${styles.paddings.mobile};
  margin: ${styles.paddings.mobile};
  border-radius: ${styles.borderRadii.standard};
  border: 1px solid ${styles.colors.grey};
  font-size: ${styles.fontSizes.s};

  ${styles.breakpoints.desktop} {
    max-width: 900px;
    margin: 0;
  }
`;

const App = () => {
  return (
    <ProgressProvider>
      <Container>
        <Form>
          <Progress />
          <Accordion />
        </Form>
      </Container>
    </ProgressProvider>
  );
};

export default App;
