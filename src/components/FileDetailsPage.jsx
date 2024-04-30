import React from 'react';
import { useParams } from 'react-router-dom';

function FileDetailsPage() {
  const { fileId } = useParams();

  return (
    <div>
      <h1>File Details</h1>
    </div>
  );
}

export default FileDetailsPage;
