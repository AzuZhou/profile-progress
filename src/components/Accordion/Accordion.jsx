import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import Checklist from 'components/Checklist';

const Root = styled(AccordionPrimitive.Root)``;
const Item = styled(AccordionPrimitive.Item)``;
const Trigger = styled(AccordionPrimitive.Trigger)``;
const Header = styled(AccordionPrimitive.Header)``;
const Content = styled(AccordionPrimitive.Content)``;

const Accordion = ({ items }) => {
  return (
    <Root type="single" collapsible>
      {items.map(({ name, tasks }) => (
        <Item key={name} value={name}>
          <Header>
            <Trigger>{name}</Trigger>
          </Header>
          <Content>
            <Checklist tasks={tasks} />
          </Content>
        </Item>
      ))}
    </Root>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      tasks: PropTypes.arrayOf(PropTypes.shape(Checklist.propTypes.tasks))
    })
  )
};

export default Accordion;
