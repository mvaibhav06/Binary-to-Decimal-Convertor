import { useState } from "react";

const Convertor = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    let out = null;
    for (let i = 0; i < input.length; i++) {
      let temp = parseInt(input[i]);
      if (temp !== 0 && temp !== 1) {
        setShowWarning(true);
        setOutput("");
        break;
      }
      if (out === null) {
        out = 0;
      }
      out = out * 2;
      out += temp;
    }
    if (!showWarning) {
      setOutput(out === null ? "" : out.toString());
    }
  };

  return (
    <div className="box">
      {showWarning && <p className="warning">Enter either 0 or 1</p>}
      <h5>Binary Input</h5>
      <div className="inp">
        <input
          placeholder="Enter 0 or 1"
          value={input}
          onChange={handleInput}
          className="form-control"
        />
        <button onClick={handleClick} className="btn btn-secondary">
          Convert
        </button>
      </div>
      <br />
      <h5>Decimal Output</h5>
      <input value={output} disabled className="form-control" />
    </div>
  );
};

export default Convertor;
