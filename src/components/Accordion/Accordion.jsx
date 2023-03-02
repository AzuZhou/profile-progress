import { useState } from 'react';
import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useProgressContext } from 'context';
import { SquareIcon, CaretUpIcon, CaretDownIcon } from '@radix-ui/react-icons';

import { styles } from 'styles/constants';

import ChecklistItem from 'components/ChecklistItem';

const Item = styled(AccordionPrimitive.Item)`
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
    }
  }
`;

const Content = styled(AccordionPrimitive.Content)`
  padding: ${styles.padding.mobile};
`;

const Accordion = () => {
  const [active, setActive] = useState(null);
  const { items } = useProgressContext();

  if (!items) return null;

  const handleChange = (value) => {
    setActive(value);
  };

  return (
    <Root type="single" collapsible onValueChange={handleChange} value={active}>
      {items.map(({ name, tasks }) => (
        <Item key={name} value={name}>
          <AccordionPrimitive.Header>
            <Trigger>
              <div>
                <SquareIcon />
                {name}
              </div>

              <div>
                {name === active ? (
                  <>
                    Hide
                    <CaretUpIcon />
                  </>
                ) : (
                  <>
                    Show
                    <CaretDownIcon />
                  </>
                )}
              </div>
            </Trigger>
          </AccordionPrimitive.Header>

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
