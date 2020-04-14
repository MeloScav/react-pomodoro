import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";
import BreakModal from "./components/break-modal";

const App = () => {
  const [seconds, setSeconds] = useState(60 * 0.05);
  const [stopTimer, setStopTimer] = useState(true);
  const [showModal, setShowModal] = useState(false);

  let $breakModal;

  // COUNTDOWN
  const countdown = (interval) => {
    // If start : decrease seconds
    if (!stopTimer) {
      setSeconds((sec) => {
        // If seconds <= 0 : timer stop
        if (sec <= 0) {
          setStopTimer(true);
          setShowModal(true);
          return sec;
        }
        return sec - 1;
      });
    } else {
      // timer stop
      clearInterval(interval);
    }
  };

  useEffect(() => {
    let timerCountDown = setInterval(() => countdown(timerCountDown), 1000);
    return () => {
      clearInterval(timerCountDown);
    };
  }, [stopTimer]);

  // TOGGLE: START - STOP
  const toggleTimer = () => {
    if (stopTimer && seconds > 0) {
      setStopTimer(false);
    } else {
      setStopTimer(true);
    }

    // The modal disappears if the seconds are greater than 0
    if (seconds > 0) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  // INCREMENTATION
  const incrementSeconds = () => {
    if (stopTimer) {
      setSeconds(seconds + 60);
    }
  };

  // DECREMENTATION
  const decrementSeconds = () => {
    if ((seconds > 60) & stopTimer) {
      setSeconds(seconds - 60);
    }
  };

  // RESET
  const resetTimer = () => {
    setStopTimer(true);
    setSeconds(60 * 25);
  };

  // MODAL BREAK TIME
  if (showModal) {
    $breakModal = <BreakModal />;
  }

  return (
    <div>
      <h1>{`${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${`${seconds % 60}`
        .toString()
        .padStart(2, "0")}`}</h1>
      <Buttons
        addOnClick={() => {
          incrementSeconds();
        }}
        toggleOnClick={() => {
          toggleTimer();
        }}
        value={stopTimer ? "Start" : "Stop"}
        resetOnClick={() => {
          resetTimer();
        }}
        substractionOnClick={() => {
          decrementSeconds();
        }}
      />
      {$breakModal}
    </div>
  );
};

export default App;
