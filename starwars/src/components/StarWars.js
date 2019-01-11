import React from 'react';
import StarCard from './StarCard'
import './StarWars.css'
const StarWars = (props) => {
    return (
        <div className='starwars'>
            {props.characterList.map((x, index) => (
                <StarCard key={index} name={x.name} birthyear={x.birth_year} haircolor={x.hair_color} height={x.height} eyecolor={x.eye_color} gender={x.gender} mass={x.mass} />
            ))}

        </div>
    )
}

export default StarWars