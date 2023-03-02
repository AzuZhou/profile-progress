import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { useProgressContext } from 'context';

const Container = styled.div``;
const Label = styled.label``;

const ChecklistItem = ({ description, value, checked, name }) => {
  const { items, updateItems } = useProgressContext();

  const handleCheck = (value) => {
    const newItems = items.map((item) =>
      item.name === name
        ? {
            ...item,
            tasks: item.tasks.map((task) =>
              task.description === description ? { ...task, checked: value } : task
            )
          }
        : item
    );
    updateItems(newItems);
  };

  return (
    <Container>
      <Checkbox.Root id={description} checked={checked} onCheckedChange={handleCheck}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
        {value}
        {checked}
      </Checkbox.Root>
      <Label htmlFor={description}>{description}</Label>
    </Container>
  );
};

ChecklistItem.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default ChecklistItem;
