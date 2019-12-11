import React from "react";

const Member = props => {
  console.log(props);
  console.log(props.memberlist);
  return (
      
    <div className="member-list">
      {props.memberList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h3>{member.name}</h3>
            <p>{member.email}</p>
            <p>{member.role}</p>
            {console.log(props.editForm, member)}
            <button onClick={(event, member)=>props.editForm(event,member)}> edit </button>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
