
import React from 'react';
//we need to import react so our app is able to understand JSX

const Card = ({name, email, id}) => {
  return (
      <div className='bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
}
export default Card