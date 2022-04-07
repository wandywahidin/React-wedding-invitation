import Card from "react-bootstrap/Card";
import "../kehadiran/attending.css";
import "./coment.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// action
import getAllComment from "../../redux/action/getAllComment";
import addComment from "../../redux/action/addComment";

const Attending = () => {
  const dispatch = useDispatch();
  const allUcapan = useSelector((state) => state.ucapanReducer.allComment);

  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        user: {
          nama,
          ucapan,
        },
      })
    );
    setNama("");
    setUcapan("");
  };

  useEffect(() => {
    dispatch(getAllComment());
  }, []);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dee2e6"
          d="M0,64L120,58.7C240,53,480,43,720,74.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <Card style={{ width: "80%" }} className="card" id="attending">
        <Card.Body className="card-body">
          <Card.Title>
            Ucapan Selamat dan Do'a untuk <br /> <h1>Ruli dan Tami</h1>
          </Card.Title>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Nama"
                className="nama"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Ucapan selamat dan Do'a..."
                name="ucapan"
                className="ucapan"
                onChange={(e) => setUcapan(e.target.value)}
                value={ucapan}
              />
            </label>
            <button type="submit" className="kirim">
              Kirim
            </button>
          </form>
        </Card.Body>
      </Card>

      <Card style={{ width: "80%" }} className="card" id="attending">
        <Card.Body className="card-body">
          {allUcapan.map((allUcapan) => {
            return (
              <div className="container-comment" key={allUcapan.id}>
                <ul>
                  <li>
                    <h6>{allUcapan.nama}</h6>
                  </li>
                  <li>{allUcapan.ucapan}</li>
                </ul>
              </div>
            );
          })}
        </Card.Body>
      </Card>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dee2e6"
          d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,176C672,149,768,139,864,138.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Attending;
