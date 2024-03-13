import React, { useState } from 'react';
import { useStateValue } from '../context/CounterContext';

const CounterComponent = () => {
  //Access state and dispatch from the context
  const { state, dispatch } = useStateValue();
  //useStateValue is a custom hook that provides access to the state and dispatch function from the context.

  //Set up local state for user input
  const [newNumber, setNewNumber] = useState('');
  //newNumber is a local state variable managed by the 
  //useState hook to keep track of the user input in the textbox.

  //Event handler to add a new number
  const handleAddNumber = () => {
    // Convert the user input to a number
    const inputNumber = parseInt(newNumber, 10);

    if (!isNaN(inputNumber)) {
      // If it's a valid number, dispatch an action to add it to the number list
      dispatch({ type: 'ADD_NUMBER', payload: inputNumber });
      // Clear the input after adding the number
      setNewNumber('');
    } else {
      // Handle invalid input (non-integer or NaN)
      alert('Please enter a valid integer in the textbox.');
    }
  };

  //Event handler to remove the last number
  const handleRemoveNumber = () => {
    dispatch({ type: 'REMOVE_NUMBER' });
  };

  return (
    <div>
      <h2>React Context Example</h2>
      <h4> Counter Example :- </h4>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} disabled={state.count === 0}>
        Decrement
      </button>
      <div>
        <h4> Number List Manager :- </h4>
      {/* Controlled input for user input */}
        <label htmlFor="newNumber">Add a new number:</label>
        <input
          type="number"
          id="newNumber"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        {/* Button to add a new number */}
        <button type="button" onClick={handleAddNumber}>
          Add Number
        </button>
        {/* Button to remove the last numbe */}
        <button type="button" onClick={handleRemoveNumber} disabled={state.numberList.length === 0}>
          Remove Number
        </button>
      </div>
      {/* Display the number list */}
      <p>Number List: {state.numberList.join(', ')}</p>
    </div>
  );
};

export default CounterComponent;