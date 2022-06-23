import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    //const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <>
      <h1>{publisher}</h1>
      <hr />
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  )
}
