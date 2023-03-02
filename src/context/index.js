import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const ProgressContext = createContext();

const useProgressContext = () => {
  const { items, updateItems } = useContext(ProgressContext);
  return { items, updateItems };
};

const ProgressProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  const updateItems = useCallback((value) => {
    setItems(value);
  }, []);

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

  const contextValue = useMemo(() => ({ items, updateItems }), [items, updateItems]);

  return <ProgressContext.Provider value={contextValue}>{children}</ProgressContext.Provider>;
};

ProgressProvider.propTypes = {
  children: PropTypes.any
};

export { ProgressContext, useProgressContext, ProgressProvider };
