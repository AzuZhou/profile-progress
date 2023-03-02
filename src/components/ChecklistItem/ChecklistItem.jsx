import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckCircledIcon, CircleIcon } from '@radix-ui/react-icons';

import { useProgressContext } from 'context';

import { styles } from 'styles/constants';

const Container = styled.div`
  display: flex;
  padding: 20px 10px;

  button {
    cursor: pointer;
  }
`;

const Root = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  background-color: ${styles.colors.white};
  border: none;

  > div {
    display: flex;
  }
`;

const Label = styled.label`
  padding-left: 10px;
  cursor: pointer;
`;

const ChecklistItem = ({ description, value, checked, name }) => {
  console.log('value: ', value);
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
      <Root id={description} checked={checked} onCheckedChange={handleCheck}>
        <>{checked ? <CheckCircledIcon /> : <CircleIcon />}</>
      </Root>
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
