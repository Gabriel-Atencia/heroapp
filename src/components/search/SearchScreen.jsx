import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroe/HeroCard";
import queryString from "query-string";
export const SearchScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, setSearchText] = useForm({ searchText: q });
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type={"tex"}
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={setSearchText}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {heroesFiltered.map((h) => (
            <HeroCard key={h.id} {...h} />
          ))}
        </div>
      </div>
    </>
  );
};
