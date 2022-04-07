import React from "react";
import "../kehadiran/coment.css";
import Card from "react-bootstrap/Card";
import "./Attending";

const Coment = (props) => {
  return (
    <div>
      <Card style={{ width: "80%" }} className="card" id="attending">
        <Card.Body className="card-body">
          <Card.Text>
            <ul>
              <li>wandy</li>
              <li>selamat</li>
            </ul>
            <ul>
              {props.data.map((x) => {
                return (
                  <li key={x.nama}>
                    {x.ucapan}
                  </li>
                );
              })}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Coment;
