import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded,setExpanded]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }

  function expanded(){
     setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}

        <textarea
          onChange={handleChange}
          onClick={expanded}
          name="content"
          placeholder="Enter your text..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded}>
        <Fab className="button" onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
