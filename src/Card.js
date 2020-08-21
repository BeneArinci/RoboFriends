
import React from 'react';
//we need to import react so our app is able to understand JSX

const Card = () => {
  return (
      <div>
        <img src='https://robohash.org/test?200x200' alt='robots'/>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    )
}
export default Card