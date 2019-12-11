import React, { useState, useEffect } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
      console.log("this is the useEffect in form");
      return setMember(props.memberEdit);
    }, [props.memberEdit])

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  console.log("this is props", props);
  


  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Team Member</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={member.name}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onChange={changeHandler}
        value={member.email}
      />

      <label htmlFor="role">What I do</label>
      <input
        id="role"
        name="role"
        type="text"
        placeholder="Role"
        onChange={changeHandler}
        value={member.role}
      />

      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;