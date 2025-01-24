import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const TextEditor = ({ content, onChange }) => {
  return (
    <ReactQuill 
      value={content}
      onChange={onChange}
      theme="snow"
      modules={{
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline'],
          ['link'],
          [{ 'align': [] }],
          ['image'],
        ],
      }}
    />
  );
};

export default TextEditor;
