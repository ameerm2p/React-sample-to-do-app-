import "./App.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [Arrdata, setArrData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [buttonText, setButtonText] = useState("Save");
  const [indexVal, setIndexVal] = useState(0);
  const title = ["SAMPLE TO DO APP", "TO DO APP", "TO DO"];

  function submitButton() {
    if (buttonText === "Save") {
      if (inputData != "") {
        setArrData((pre) => [...pre, inputData]);
        setInputData("");
      } else {
        alert("Please enter a text");
      }
    } else {
      console.log(indexVal);
      const updateData = [...Arrdata];
      updateData[indexVal] = inputData;
      setArrData(updateData);
      setInputData("");
      setButtonText("Save");
    }
  }
  // console.log("data- "+Arrdata);
  function inputChange(e) {
    //console.log(e.target.value);
    setInputData(e.target.value);
  }

  function editText(e, index) {
    setInputData(e);

    setIndexVal(index);
    setButtonText("Edit");
  }

  function deleteText(index) {
    // console.log(index);
    const newData = Arrdata.filter((_, i) => i !== index);
    setArrData(newData);
  }

  function handleCheckboxChange(e, index) {
    console.log("id: " + index + " - check: " + e.target.checked);
  }

  function handelAllDeleteButton() {
    setArrData([]);
  }
  function genRandom(max) {
    console.log(Math.floor(Math.random() * (max + 1)));
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <div className="App">
      <h2 style={{color:"blue"}} >{title[genRandom(2)]}</h2>
      <Form.Label htmlFor="inputPassword5">Text:</Form.Label>
      <br></br>
      <Form.Control
        type="text"
        id="data"
        name="data"
        aria-describedby="passwordHelpBlock"
        style={{ width: "200px", display: "initial", cursor: "pointer" }}
        value={inputData}
        onChange={inputChange}
      />
      <br></br>

      <Button variant="primary" onClick={submitButton} type="submit">
        Submit
      </Button>
      <Button variant="danger" onClick={handelAllDeleteButton} type="submit">
        Delete All
      </Button>

      <br></br>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Text</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Arrdata.map((item, index) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </td>
              <td>{item}</td>
              <td>
                <button
                  type="submit"
                  id={"edit-" + index}
                  onClick={() => editText(item, index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="submit"
                  id={"delete-" + index}
                  onClick={() => deleteText(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
