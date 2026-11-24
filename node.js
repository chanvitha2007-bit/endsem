import { useState } from 'react';

function App() {
  const [marks, setMarks] = useState([0, 0, 0]);

  let total = marks.reduce((a, b) => a + Number(b), 0);
  let avg = total / 3;

  return (
    <div>
      <h2>Student Result</h2>
      {marks.map((m, i) => (
        <input key={i} type="number" placeholder={`Subject ${i + 1}`}
          onChange={e => setMarks(marks.map((x, j) => j === i ? e.target.value : x))} />
      ))}
      <h3>Total: {total}</h3>
      <h3>Average: {avg}</h3>
    </div>
  );
}

export default App;