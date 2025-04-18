'use client';

import { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error();
  }
};

const useIpDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const accessKey = process.env.NEXT_PUBLIC_IPAPI_ACCESS_KEY;
        const response = await fetch(`https://ipinfo.io?token=ff54dabd6117c7`);
        const result = await response.json();
        if (response.ok) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        } else {
          dispatch({ type: 'FETCH_FAILURE', payload: result.message });
        }
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return state;
};

export default useIpDetails;
