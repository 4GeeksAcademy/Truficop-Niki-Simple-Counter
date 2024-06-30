import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons"; // Ícono de reloj regular
import '@fortawesome/fontawesome-free/css/all.min.css';

export const SecondsCounter = (props) => {
  const seconds = props.seconds;
  return (
    <div className="container fs-1 text-center bg-black text-bg-primary p-5" style={{ letterSpacing: '2.0em' }}>
      <h1><FontAwesomeIcon icon={faClock} style={{ fontSize: '8rem' }} /> <span style={{ fontSize: '8rem', fontFamily: 'Courier New, monospace' }}>{seconds}</span></h1>
    </div>
  );
};