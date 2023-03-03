import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { SquareIcon, CaretDownIcon, CheckIcon } from '@radix-ui/react-icons';

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
      border-top-left-radius: ${styles.borderRadii.standard};
      border-top-right-radius: ${styles.borderRadii.standard};
    }
  }
  &:last-child {
    h3 > button:first-child {
      border-bottom-left-radius: ${styles.borderRadii.standard};
      border-bottom-right-radius: ${styles.borderRadii.standard};
    }
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

const Title = styled.div`
  font-size: ${styles.fontSizes.m};
  color: ${({ complete }) => (complete ? styles.colors.green : styles.colors.black)};
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

const AccordionItem = ({ name, tasks }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const isSectionComplete = !tasks.find((task) => task.checked === false);
    setComplete(isSectionComplete);
  }, [tasks]);

  return (
    <Item value={name}>
      <Header>
        <Trigger>
          <Title complete={complete}>
            {complete ? <CheckIcon /> : <SquareIcon />}
            {name}
          </Title>

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
  );
};

AccordionItem.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired
    })
  )
};

export default AccordionItem;
