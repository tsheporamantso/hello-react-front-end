import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchRandomGreeting());
  };

  if (isLoading) {
    return (
      <div className="loading">.....isLoading</div>
    );
  }

  if (error) {
    return (
      <div className="loading">Something went wrong with fetching data!</div>
    );
  }

  return (
    <>
      <h1 className="title">Greetings!</h1>
      <div className="main">
        <div className="greeting">{greeting}</div>
        <button type="button" onClick={handleClick}>Submit another greeting</button>
      </div>
    </>
  );
}

export default Greeting;
