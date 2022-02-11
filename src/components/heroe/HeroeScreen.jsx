import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react/cjs/react.development";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroeScreen = ({ publisher }) => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  if (!hero) return <Navigate to="/" />;

  const imgPath = `./assets/${hero.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div className="row mt-5 animate__animated animate__backInLeft">
      <div className="col-4">
        <img src={imgPath} alt={hero.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Firs Appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
      <p>{hero.superhero}</p>
    </div>
  );
};
