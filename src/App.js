import "./App.css";
import React,{ useRef, useState } from "react";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [act, setAct] = useState(0);
  const [index, setIndex] = useState('');
  const [title, SetTitle] = useState("My React app");
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const txtName = useRef();
  const txtAge = useRef();
  const myForm = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    let employeeData1 = employeeData;
    let name = txtName.current.value;
    let age = txtAge.current.value;

    if(act === 0){
      let newemployeeData = {
        name: name,
        age: age,
      };
      employeeData1.push(newemployeeData);
    }else{
      let index = index;
      employeeData1[index].name = name;
      employeeData1[index].age = age;
    }
    setEmployeeData(employeeData1);
    setAct(0)
    myForm.current.reset();
    console.log("employeeData", employeeData);
    forceUpdate();
  };

  const handleDelete = (i) => {
    let employeeData2 = employeeData;
    employeeData2.splice(i,1);
    setEmployeeData(employeeData2);
  }

  const handleEdit = (i) => {
    let employeeData3 = employeeData[i];
    txtName.current.value = employeeData.name;
    txtAge.current.value = employeeData.age;
    setAct(i)
    setIndex(i);
    setEmployeeData(employeeData3);
  }


  return (
    <>
      <form ref={myForm}>
        <label>Name</label>
        <input type="text" ref={txtName} placeholder="Enter Name" />
        <label>Age</label>
        <input type="text" ref={txtAge} placeholder="Enter Age" />
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {employeeData.map((data, i) => (
          <tr key={i}>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>
              <button onClick={i => handleEdit(i)}>Edit</button>
            </td>
            <td>
              <button onClick={ i => handleDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
