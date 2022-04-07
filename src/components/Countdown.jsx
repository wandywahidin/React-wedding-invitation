import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import "./countdown.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Jan 22 2022 10:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    } ;
  });

  return (
    <div className="count text-center">
      <Card className="days text-center">
        <h2>{timerDays}</h2>
        <span>Days</span>
      </Card>
      <div className="hours text-center">
        <h2>{timerHours}</h2>
        <span>Hours</span>
      </div>
      <div className="minutes text-center">
        <h2>{timerMinutes}</h2>
        <span>minutes</span>
      </div>
      <div className="seconds text-center">
        <h2>{timerSeconds}</h2>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
