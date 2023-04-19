import ItemCount from "./ItemCount";

const Counter = () => {

  const {
    counter,
    increment,
    decrement,
    reset
  } = ItemCount();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;