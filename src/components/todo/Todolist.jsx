import React from "react";

const Todolist = (props) => {
  console.log(props.propsData)

  return (
    <div>
      <ul>
       {props.propsData.map((data) => {
         return <li key={data.id}>{data.nama} <br /> {data.ucapan}</li>
       })}
      </ul>
    </div>
  );
};

export default Todolist;
