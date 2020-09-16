import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions/actions';

function NotesForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  function handleSubmission(e) {
    e.preventDefault();

    dispatch(addNote(title, content));
    setTitle('');
    setContent('');
  }

  return (
    <React.Fragment>
      <h3>Add a Note</h3>

      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </React.Fragment>
  );
}

export default NotesForm;
