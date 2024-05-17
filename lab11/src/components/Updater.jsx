import React, { useEffect, useState } from 'react';
import img2 from '../images/picture.png'

function Updater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
  });

  return (
    <div className="counter">
      <button className="btn" onClick={() => setCount(Math.max(0, count - 1))}>
        -
      </button>
      <p className="p1">{count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="card" onClick={() => alert('Количество заказанного товара: ' + count)}>
        <img src={img2} alt="korzina"/>
      </button>
    </div>
  );
}
export default Updater;