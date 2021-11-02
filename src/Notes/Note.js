import React, { useState } from "react";
import "./Note.css";

let Note = () => {
  let [title, setTitle] = useState();

  let [item, setItem] = useState([]);

  let addNote = () => {
    setItem((oldVal) => {
      return [...oldVal, title];
    });
    setTitle('');
  };

  let deleteBtn = (id) => {
    //   console.log(123);
    setItem((oldVal) => {
        return oldVal.filter((elem, index) =>{
          return  index !== id;
        })
    });
  }

  return (
    <>
      <div id="note">
        <p>Title</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
        <button onClick={addNote} className="btn">
          Add
        </button>
      </div>

     
        {item.map((value, index) => {
          return (
            <>
              <h3 key={index} id={index}> {value} <button onClick={deleteBtn}>delete</button></h3>
            </>
          );
        })}
    
    </>
  );
};

export default Note;
