import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();

  //const hero = getHeroById(id);
  const hero = useMemo( () => getHeroById(id), [id]);

  // retroceder una página atrás
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1, { replace: true });
  }

  if (!hero) return <Navigate to="/marvel" />;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../../../assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h1>{hero.superhero}</h1>
        <ul className="list-group">
          <li className="list-group-item"> Alter ego: {hero.alter_ego} </li>
          <li className="list-group-item"> Publisher: {hero.publisher} </li>
          {hero.characters !== hero.alter_ego && <li className="list-group-item">Characters: {hero.characters}</li>}
          <li className="list-group-item"> First appearance: {hero.first_appearance} </li>
        </ul>
        <button onClick={goBack} className="btn btn-dark mt-2">Back</button>
      </div>
    </div>
  );
};
