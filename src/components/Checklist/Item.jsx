import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const Container = styled.div``;
const Label = styled.label``;

const Item = ({ description, value, checked }) => (
  <Container>
    <Checkbox.Root id={description} checked={checked}>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
      {value}
      {checked}
    </Checkbox.Root>
    <Label htmlFor={description}>{description}</Label>
  </Container>
);

Item.propTypes = {
  description: PropTypes.string,
  value: PropTypes.number,
  checked: PropTypes.bool
};

export default Item;
