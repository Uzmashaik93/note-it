import React, { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Note from "./Note";
import "./styles.css";
import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  Timestamp,
  onSnapshot,
  doc,
  query,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "./Components/auth";
import { toast } from "react-toastify";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const authContext = useAuth();

  function addNote(newNote) {
    setLoading(true);
    const notesCollection = collection(
      db,
      "users",
      authContext.user.uid,
      "notes"
    );

    addDoc(notesCollection, {
      title: newNote.title,
      content: newNote.content,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
      .then(() => {
        toast("Note created succesfully!");
        setLoading(false);
      })
      .catch(function (e) {
        console.log(e);
        setLoading(false);
      });
  }

  function deleteNote(id) {
    setLoading(true);
    deleteDoc(doc(db, "users", authContext.user.uid, "notes", id))
      .then(() => {
        toast("Deleted succesfully!");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (authContext.user === null) {
      return;
    }
    const q = query(collection(db, "users", authContext.user.uid, "notes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updateNotes = [];
      querySnapshot.forEach((doc) => {
        updateNotes.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setNotes(updateNotes);

    });

    return () => {
      unsubscribe();
    };
  }, [authContext.user]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
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
