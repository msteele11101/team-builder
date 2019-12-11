import React, { useState } from "react";
import Form from "./Components/Form";
import Member from "./Components/Member";

import data from "./data";
import "./App.css";

function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  const editForm = (event,member) => {
    console.log("hey editForm just fired");
    return event,member ;
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>Member List</h2>
        <div className="form-box">
          <Form addNewMember={addNewMember}  memberEdit={editForm}/>
          <Member memberList={members} editForm={editForm} />
        </div>
      </header>
    </div>
  );
}

export default App;
