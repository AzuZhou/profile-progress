import * as ProgressPrimitive from '@radix-ui/react-progress';
import styled from 'styled-components';

import { useProgressContext } from 'context';

import { getProgress } from 'utils/helper';

import { styles } from 'styles/constants';

const Container = styled.div`
  padding: ${styles.paddings.mobile};
`;

const Title = styled.h1`
  margin-top: 40px;
`;

const Root = styled(ProgressPrimitive.Root)`
  position: relative;
  overflow: hidden;
  border-radius: ${styles.borderRadii.round};
  height: 25px;
  width: 100%;
  transform: translateZ(0);
  margin-top: 15px;
  background-color: ${styles.colors.lightgreen};

  &:after {
    display: none;
    align-items: center;
    position: absolute;
    content: ${({ progress }) => `"${progress}%"`};
    right: ${({ progress }) => `${100 - progress}%`};
    transition: right 660ms cubic-bezier(0.65, 0, 0.35, 1);
    bottom: 0;
    top: 0;
    margin: 0 10px;
    color: ${styles.colors.white};
    font-size: ${styles.fontSizes.xs};

    ${styles.breakpoints.desktop} {
      display: flex;
    }
  }
`;

const Indicator = styled(ProgressPrimitive.Indicator)`
  background-color: ${styles.colors.green};
  width: 100%;
  height: 100%;
  border-radius: ${styles.borderRadii.round};
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;

const Progress = () => {
  const { items } = useProgressContext();

  if (!items) return null;

  const progress = getProgress(items);
  console.log('progress: ', progress);

  return (
    <Container>
      <Title>Lodgify Grouped Tasks</Title>

      <Root progress={progress} value={progress}>
        <Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
      </Root>
    </Container>
  );
};

export default Progress;
