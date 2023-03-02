import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { useProgressContext } from 'context';

import ChecklistItem from 'components/ChecklistItem';

const Root = styled(AccordionPrimitive.Root)``;
const Item = styled(AccordionPrimitive.Item)``;
const Trigger = styled(AccordionPrimitive.Trigger)``;
const Header = styled(AccordionPrimitive.Header)``;
const Content = styled(AccordionPrimitive.Content)``;

const Accordion = () => {
  const { items } = useProgressContext();

  if (!items) return null;

  return (
    <Root type="single" collapsible>
      {items.map(({ name, tasks }) => (
        <Item key={name} value={name}>
          <Header>
            <Trigger>{name}</Trigger>
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
