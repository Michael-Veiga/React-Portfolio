import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function CodeWars() {
  const renderTooltip = props => (
    <Tooltip {...props}>Click to see my javascript progression</Tooltip>
  );

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <a
          target="_blank"
          href="https://www.codewars.com/users/PatientXCompiler/completed_solutions"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.codewars.com/users/PatientXCompiler/badges/small"
            alt="codewars badge small"
          />
        </a>
      </OverlayTrigger>
    </>
  );
}
