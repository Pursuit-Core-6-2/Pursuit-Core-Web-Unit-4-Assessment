/*
JOSEPH P. PASAOA
Aboutpage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
import React from 'react';

import './Aboutpage.css';


/* COMPONENT + EXPORT */
const Aboutpage = () => {

  return(
    <div className="stage">
      <h1>About YouTube Abbreviated</h1>
      <div className="body-about">
        
        <p>
          YouTube Abbreviated takes the user's inputed search and returns eight
          of the top results from the YouTube API (Thanks, 
            YouTube). 
          The user is then able to watch any of the results in the video 
          result's own page which allows comments to be submitted and saved 
          (temporarily for now).
        </p>
          
        <p>
          YouTube Abbreviated is at it's core a kick-a** React app developed
          under the shadow of the Unit 4 Assessment Component of the famed
          Pursuit 
          real-life app.
        </p>
        
        <p>
          Regards,<br />
          <strong>Joseph P. Pasaoa, developer</strong>
        </p>

      </div>

    </div>
  );
}

export default Aboutpage;
