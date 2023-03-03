import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useProgressContext } from 'context';

import { styles } from 'styles/constants';

import AccordionItem from './AccordionItem';

const Root = styled(AccordionPrimitive.Root)`
  margin-top: ${styles.paddings.mobile};
  border-radius: ${styles.borderRadii.standard};
  border: 1px solid ${styles.colors.grey};

  > div ~ div {
    border-top: 1px solid ${styles.colors.lightgrey};
  }
`;

const Accordion = () => {
  const { items } = useProgressContext();

  if (!items) return null;

  return (
    <Root type="single" collapsible>
      {items.map((item) => (
        <AccordionItem {...item} key={item.name} />
      ))}
    </Root>
  );
};

export default Accordion;
