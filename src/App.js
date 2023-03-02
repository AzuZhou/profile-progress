import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Accordion from 'components/Accordion';

const Container = styled.div``;
const Title = styled.h1``;

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setItems(response.data);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <Title>Lodgify Grouped Tasks</Title>
      {items.length > 0 && <Accordion items={items} />}
    </Container>
  );
};

export default App;
