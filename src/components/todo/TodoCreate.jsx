import React, { useState } from "react";

const TodoCreate = (props) => {
  const [getNewData, setNewData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: Math.floor(Math.random() * 200) + 1,
      nama: getNewData.firstName,
      ucapan: getNewData.lastName
    };
    props.onCreate(newData);
    
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setNewData({
      ...getNewData,
      [event.target.name]: value,
    });
  };
  console.log(getNewData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={getNewData.firstName}
          onChange={handleInput}
        />
        <input type="text" name="lastName" value={getNewData.lastName} onChange={handleInput}/>
        <button type="submit">kirim</button>
      </form>
    </div>
  );
};

export default TodoCreate;
