import React, { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import "./styles.css";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);
  const [refresh, setRefresh] = useState(false);


  function addNote(newNote) {
    axios
      .post("http://localhost:8001/add", newNote)
      .then(function (res) {
        setRefresh(!refresh);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteNote(id) {
    axios.delete("http://localhost:8001/" + id).then(function (res) {
      setRefresh(!refresh);
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:8001")
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((er) => console.log(er));
  }, [refresh]);

  return (
    <div>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={noteItem._id}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
    </div>
  );
}

export default Home;
