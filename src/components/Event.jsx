import React from "react";
import "./event.css";
import Card from "react-bootstrap/Card";
import Gb from "../images/cincin-removebg-preview.png";
import cal from "../images/cal-removebg-preview.png";
import time from "../images/time-removebg-preview.png";
import lok from "../images/lokasi.png";
import pasangan from "../images/pasangan-removebg-preview.png";
import protect from "../images/protect.png";
import mask from "../images/masker-removebg-preview.png";
import cuci from "../images/cuci-removebg-preview.png";
import jarak from "../images/jarak.png";

const Event = () => {
  return (
    <div className="heading-event text-center">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#dee2e6"
            d="M0,64L120,58.7C240,53,480,43,720,74.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <h1 id="event">Save The Date</h1>
      <h2>
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami
        mengundang Bapak/Ibu/Sodara/i, umtuk menghadiri Syukuran Pernikahan
        kami.
      </h2>

      <Card style={{ width: "80%" }} className="text-center card">
        <Card.Img
          variant="top"
          src={Gb}
          style={{ width: "5rem" }}
          className="card-img"
        />
        <Card.Body className="card-body">
          <Card.Title className="cardTitle">Akad Nikah</Card.Title>
          <Card.Text>
            <img src={cal} alt="calendar" width={"30rem"} />
            <span> Sabtu, 22 Januari 2022</span> <br />
            <img src={time} alt="calendar" width={"40rem"} />
            <span> 08.00 - Selesai</span> <br />
            <img src={lok} alt="calendar" width={"20rem"} />
            <span>
              {" "}
              Kp. Babakan Sawah Rt/Rw 01/06 Desa Sukasukur Kecamatan Cisayong
              Tasikmalaya
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "80%" }} className="text-center card">
        <Card.Img
          variant="top"
          src={pasangan}
          style={{ width: "7rem" }}
          className="card-img"
        />
        <Card.Body>
          <Card.Title className="cardTitle">Resepsi</Card.Title>
          <Card.Text>
            <img src={cal} alt="calendar" width={"30rem"} />
            <span> Sabtu, 22 Januari 2022</span> <br />
            <img src={time} alt="calendar" width={"40rem"} />
            <span> 10.30- Selesai</span> <br />
            <img src={lok} alt="calendar" width={"20rem"} />
            <span>
              {" "}
              Kp. Babakan Sawah Rt/Rw 01/06 Desa Sukasukur Kecamatan Cisayong
              Tasikmalaya
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "80%" }} className="text-center card">
        <Card.Img
          variant="top"
          src={protect}
          style={{ width: "7rem" }}
          className="card-img"
        />
        <Card.Body className="card-body">
          <Card.Title className="cardTitle">
            Protokol Kesehatan <br />
          </Card.Title>
          <Card.Text>
            <span>
              Untuk mematuhi himbauan pemerintah dalam pencegahan penyebaran
              Covid-19, maka diharapkan Bapak/Ibu/Sodara/i tamu Undangan untuk :
            </span>
            <br /> <br />
            <img src={mask} alt="calendar" width={"80rem"} /> <br />
            <span> Memakai Masker</span> <br /> <br />
            <img src={cuci} alt="calendar" width={"50rem"} /> <br />
            <span> Mencuci Tangan</span> <br /> <br />
            <img src={jarak} alt="calendar" width={"80rem"} /> <br />
            <span>Menjaga jarak minimal 2 Meter</span> <br />
            <span>--</span> <br />
            <span>
              Terimakasih atas pengertian Bapak/Ibu/Sodara/i, semoga dengan
              melakukan protokol kesehatan diatas, kita semua dapat terjaga dari
              bahaya Covid-19.
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#dee2e6"
            d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,176C672,149,768,139,864,138.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Event;
