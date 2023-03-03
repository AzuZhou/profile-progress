import styled from 'styled-components';

import { useProgressContext } from 'context';

import { styles } from 'styles/constants';

import Accordion from 'components/Accordion';
import Progress from 'components/Progress';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${styles.colors.white};
  padding: ${styles.paddings.mobile};
  font-size: ${styles.fontSizes.s};

  ${styles.breakpoints.tablet} {
    min-height: auto;
    margin: ${styles.paddings.mobile};
    border-radius: ${styles.borderRadii.standard};
    border: 1px solid ${styles.colors.grey};
  }

  ${styles.breakpoints.desktop} {
    max-width: 900px;
  }
`;

const Button = styled.button`
  display: flex;
  align-self: flex-end;
  margin: 30px 0 40px;
  padding: 10px 25px;
  justify-content: center;
  width: 100%;
  border-radius: ${styles.borderRadii.standard};

  &:not(:disabled) {
    background-color: ${styles.colors.white};
    border: 1px solid ${styles.colors.green};
    color: ${styles.colors.green};
    cursor: pointer;

    &:focus-within,
    &:hover {
      background-color: ${styles.colors.green};
      color: ${styles.colors.white};

      transition: background-color 300ms cubic-bezier(0.87, 0, 0.13, 1),
        color 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
  }

  &:disabled {
    color: ${styles.colors.grey};
    border: 1px solid ${styles.colors.lightgrey};
  }

  ${styles.breakpoints.tablet} {
    width: auto;
  }
`;

const App = () => {
  const { progress } = useProgressContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Progress />
        <Accordion />
        <Button aria-label="Done" type="submit" disabled={progress !== 100}>
          Done
        </Button>
      </Form>
    </Container>
  );
};

export default App;
