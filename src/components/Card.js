import React from 'react';
//bg-light-green dib  br3 pa3 ma2 tc grow bw2 shadow-5

const Card = ({id, name, email}) =>{
       return(
        <div className='bg-light-green dib ma2 pa3 br3 bw2 grow shadow-5 '>
            <img alt='robo' src={`https://robohash.org/y${id}?200x200`}/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;