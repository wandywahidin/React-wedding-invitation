import React from "react";
import Card from "react-bootstrap/Card";
import "./wishes.css";

const Wishes = () => {

  const onCopy = () => {
    const rek = 6640489214
    navigator.clipboard.writeText(rek)
    alert('Copied')
  }

  return (
    <div className="heading-wishes text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dee2e6"
          d="M0,64L120,58.7C240,53,480,43,720,74.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <h1 id="wishes">Wishes</h1>
      <blockquote className="quote">
        - "Dan diantara tanda-tanda kebesaran-Nya ialah Dia menciptakan
        pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
        merasa tentram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan
        sayang. Sungguh, pada yang demikian itu terdapat tanda-tanda (kebesaran
        Allah) bagi orang yang berfikir" - <br /> <br />
        <span>- QS. Ar-Rum : 21-</span>
      </blockquote>

      <h1 id="wishes">Quotes</h1>
      <blockquote className="quote">
        - "Love is a mystery that is hidden throughout the ages, sneaking behind
        the appearance and make our hearts as the nest" - <br /> <br />
      </blockquote>

      <Card style={{ width: "80%" }} className="text-center card">
        <Card.Body className="card-body">
          <Card.Title>Love Gift</Card.Title>
          <Card.Text>
            <span>
              Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan
              tanda kasih untuk kami, dapat melalui :
            </span>
            <br /> <br />
            <span> Bank BCA</span> <br />
            <span>
              No. Rekening <span id="myInput">664-048-9241</span>
            </span>
            <br />
            <span>A.n Wandy Wahidin</span>
          </Card.Text>
          <button onClick={onCopy} className="btn btn-primary">Salin No. Rekening</button>
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

export default Wishes;
