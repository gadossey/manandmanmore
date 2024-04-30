// UploadedFiles.js
import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

function UploadedFiles({ uploadedFiles, currentFileId, onFileClick }) {
  return (
    <List>
      {uploadedFiles.map((file) => (
        <ListItem
          key={file.id}
          button
          selected={currentFileId === file.id}
          onClick={() => onFileClick(file.id)}
        >
          <ListItemText primary={file.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default UploadedFiles;
