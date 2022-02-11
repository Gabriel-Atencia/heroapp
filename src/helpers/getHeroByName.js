import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  return heroes.filter((n) =>
    n.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
