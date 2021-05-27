import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Titlebar from './components/Titlebar';
import Input from './components/Input'
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export default function App() {

  const [list, setlist] = useState(
    localStorage.getItem("storedList") !== null ? JSON.parse(localStorage.getItem("storedList")) : []
  );
  const [input, setinput] = useState("");
  const [comp, setcomp] = useState(false);
  const [id, setid] = useState(0);

  useEffect(() => {
    store();
  });

  function addToList() {
    if (list.some(x => x.task === input)) {
      alert("Cannot have duplicate items!");
    }
    else if (input.length !== 0) {
      let temp = list.concat({ 'task': input, 'isCompleted': comp , 'id': id});
      setinput("");
      setlist(temp);
      setid(id + 1);
      setcomp(false);
    }
    else {
      alert("Your item needs a name!");
    }
  }

  function store() {
    let jsonList = JSON.stringify(list);
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("storedList", jsonList);
    }
  }

  function isComp() {
    setcomp(!comp);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addToList();
      e.preventDefault();
    }
  }

  function deleteItem(task) {
    const newList = list.filter((item) => item.task !== task);
    setlist(newList);
  }

  function updateComps(id) {
    const index = list.findIndex(task => task.id === id);
    let newList = list.slice();
    newList[index].isCompleted = !newList[index].isCompleted;
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
            <Box margin="5px" padding="5px" borderRadius="5px" bgcolor="gray" key={listItem.id}>
              {listItem.task}
              <Checkbox color="primary" onClick={() => updateComps(listItem.id)} checked={listItem.isCompleted} />
              <Button onClick={() => deleteItem(listItem.task)} variant="contained" color="secondary" >Delete</Button>
            </Box>)}
        </Box>
      </Box>
    </div>
  );
}