import styled, { keyframes } from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useProgressContext } from 'context';
import { SquareIcon, CaretDownIcon } from '@radix-ui/react-icons';

import { styles } from 'styles/constants';

import ChecklistItem from 'components/ChecklistItem';

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;
const slideUp = keyframes`
from {
  height: var(--radix-accordion-content-height);
}
to {
  height: 0;
}
`;

const Item = styled(AccordionPrimitive.Item)`
  overflow: hidden;

  &:focus-within {
    position: relative;
    z-index: 1;
  }

  &:first-child {
    h3 > button:first-child {
      border-top-left-radius: ${styles.borderRadius.standard};
      border-top-right-radius: ${styles.borderRadius.standard};
    }
  }
  &:last-child {
    h3 > button:first-child {
      border-bottom-left-radius: ${styles.borderRadius.standard};
      border-bottom-right-radius: ${styles.borderRadius.standard};
    }
  }
`;

const Root = styled(AccordionPrimitive.Root)`
  margin-top: ${styles.padding.mobile};
  border-radius: ${styles.borderRadius.standard};
  border: 1px solid ${styles.colors.grey};

  ${Item} ~ ${Item} {
    border-top: 1px solid ${styles.colors.lightgrey};
  }
`;

const Trigger = styled(AccordionPrimitive.Trigger)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: none;
  cursor: pointer;
  background: ${styles.colors.white};
  color: red;
  font-family: ${styles.fontFamilies.sourceSansPro};

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    &:first-child {
      font-size: ${styles.fontSizes.m};
      color: ${styles.colors.black};
    }

    &:last-child {
      color: ${styles.colors.darkgrey};

      &:before {
        content: 'Show';
      }

      svg {
        transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
  }

  &[data-state='open'] {
    > div:last-child {
      &:before {
        content: 'Hide';
      }

      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

const Content = styled(AccordionPrimitive.Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

const Header = styled(AccordionPrimitive.Header)`
  display: flex;
`;

const Accordion = () => {
  const { items } = useProgressContext();

  if (!items) return null;

  return (
    <Root type="single" collapsible>
      {items.map(({ name, tasks }) => (
        <Item key={name} value={name}>
          <Header>
            <Trigger>
              <div>
                <SquareIcon />
                {name}
              </div>

              <div>
                <CaretDownIcon />
              </div>
            </Trigger>
          </Header>

          <Content>
            {tasks.map((task) => (
              <ChecklistItem key={task.description} {...task} name={name} />
            ))}
          </Content>
        </Item>
      ))}
    </Root>
  );
};

export default Accordion;
