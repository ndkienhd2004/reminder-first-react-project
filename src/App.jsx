import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { TodoItem } from "./TodoItem";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const onInputChanged = (event) => {
    setInputText(event.target.value);
  };
  const onAddButtonClicked = () => {
    if (inputText !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  };
  const onDeleteButtonClicked = (deleteButtonIndex) => {
    setTodos(
      todos.filter((_, todoArrIndex) => todoArrIndex !== deleteButtonIndex)
    );
  };
  const onTodoUpdated = (newTodoValue, index) => {
    setTodos(todos.map((val, idx) => (idx === index ? newTodoValue : val)));
  };
  const mapTodoToComponent = (todo, index) => (
    <TodoItem
      key={index}
      value={todo}
      onDelete={() => onDeleteButtonClicked(index)}
      onEdit={(updatedValue) => onTodoUpdated(updatedValue, index)}
    />
  );

  return (
    <>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <TextField
          sx={{ flexGrow: 1, marginRight: 10 }}
          label="New todos"
          variant="outlined"
          value={inputText}
          onChange={onInputChanged}
        />
        <Button
          // variant="contained"
          onClick={onAddButtonClicked}
        >
          Add
        </Button>
      </Stack>
      {todos.map(mapTodoToComponent)}
    </>
  );
};

export default App;
