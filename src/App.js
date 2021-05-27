import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Titlebar from './components/Titlebar';
import Input from './components/Input'
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { ListItem } from '@material-ui/core';

function store(list) {
  if(typeof(Storage) !== "undefined"){
    localStorage.setItem("storedList", JSON.stringify(list));
  }
  else {
    localStorage.clear();
  }
}

export default function App() {

  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");
  const [comp, setcomp] = useState(false);

  function addToList() {
    if (list.some(x => x.task === input)){
      alert("Cannot have duplicate items!");
    }
    else if (input.length !== 0) {
      let temp = list.concat({'task': input, 'isCompleted': comp});
      setinput("");
      setlist(temp);
      setcomp(false);
      console.log("storing: "+JSON.stringify(temp));
      // store(temp);
    }
    else {
      alert("Your item needs a name!");
    }
  }

  function isComp() {
    setcomp(!comp);
    // let rtrobj = localStorage.getItem("storedList")
    // console.log("retrieved object: " + JSON.parse(rtrobj));
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addToList();
      e.preventDefault();
    }
  }

  function deleteItem(id) {
    const newList = list.filter((item) => item.task !== id);
    setlist(newList);
  }

  return (
    <div style={{ backgroundColor: "#424245" }}>
      <Titlebar />
      <Box margin="10px" display="flex" justifyContent="center">
        <form noValidate autoComplete="off">
          <TextField onKeyPress={handleKeyPress} required value={input} onChange={(event) => setinput(event.target.value)} id="todo-text" label="Todo" variant="filled" />
        </form>
        <Input click={isComp} checked={comp} />
        <Box margin="18px" display="flex" justifyContent="center" alignContent="center">
          <Button size="large" onClick={addToList} variant="contained" color="primary">Add Item</Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box padding="10px" color="white" textAlign="center" width="500px" height="100vh" display="flex" flexDirection="column">
          {list.map(listItem =>
            <Box margin="5px" padding="5px" borderRadius="5px" bgcolor="gray" key={listItem.task}>
              {listItem.task}
              <Checkbox color="primary" defaultChecked={listItem.isCompleted} />
              <Button onClick={() => deleteItem(listItem.task)} variant="contained" color="secondary" >Delete</Button>
            </Box>)}
        </Box>
      </Box>
    </div>
  );
}