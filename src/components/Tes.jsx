import React, { useEffect, useRef, useState } from "react";
import './tes.css'

const Tes = () => {
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
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
    };
  });

  return (
    <div>
      <section>
        <ul id="countdown">
          <li>
            <span class="days timenumbers">{timerDays}</span>
            <p class="timeRefDays timedescription">days</p>
          </li>
          <li>
            <span class="hours timenumbers">{timerHours}</span>
            <p class="timeRefHours timedescription">hours</p>
          </li>
          <li>
            <span class="minutes timenumbers">{timerMinutes}</span>
            <p class="timeRefMinutes timedescription">minutes</p>
          </li>
          <li>
            <span class="seconds timenumbers yellow-text">{timerSeconds}</span>
            <p class="timeRefSeconds timedescription">seconds</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Tes;
