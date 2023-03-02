import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div``;

const Checklist = ({ tasks }) => (
  <Container>
    {tasks.map((task) => (
      <Item key={task.description} {...task} />
    ))}
  </Container>
);

Checklist.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape(Item.propTypes))
};

export default Checklist;
