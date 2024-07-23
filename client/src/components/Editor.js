// src/components/Editor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill value={value} onChange={onChange} />
  );
};

export default Editor;