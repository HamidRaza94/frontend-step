import { useState } from 'react';
import axios from 'axios';

import Input from './components/Input';
import './App.css';

function App() {
  const [fNumber, setFNumber] = useState();
  const [sNumber, setSNumber] = useState();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { num1: Number(fNumber), num2: Number(sNumber) }
    axios
      .post('http://127.0.0.1:3001/step-addition', data)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <header>
        <h1>Step Addition</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <Input value={fNumber} setValue={setFNumber} label="First Number:" type="number" id="fNumber" name="fNumber" min="0" />
        <br />
        <Input value={sNumber} setValue={setSNumber} label="Second Number:" type="number" id="sNumber" name="sNumber" min="0" />
        <br />
        <input type="submit" value="Generate Steps" />
      </form>

      {data && (
        <div>
          {JSON.stringify(data)}
        </div>
      )}
    </>
  );
}

export default App;
