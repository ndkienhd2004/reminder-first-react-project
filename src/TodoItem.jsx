import { IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

export const TodoItem = ({ value, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState("");

  const onEditButtonClicked = () => {
    setEditing(true);
    setInputText(value);
  };
  const onDoneButtonClicked = () => {
    onEdit(inputText);
    setEditing(false);
  };
  const onInputChanged = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      {editing ? (
        <Stack
          direction="row"
          sx={{
            marginTop: 20,
            border: "1px #1976d2 solid",
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
          }}
        >
          <TextField
            onChange={onInputChanged}
            hiddenLabel
            defaultValue={inputText}
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <IconButton onClick={onDoneButtonClicked}>
            <DoneIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          direction="row"
          sx={{
            marginTop: 20,
            border: "1px #1976d2 solid",
            borderRadius: 10,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Typography sx={{ flexGrow: 1 }}>{value}</Typography>
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={onEditButtonClicked}>
            <EditIcon />
          </IconButton>
        </Stack>
      )}
    </>
  );
};
