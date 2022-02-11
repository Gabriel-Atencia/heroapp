import React, { useMemo } from "react";

import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher = "marvel" }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div>
      <ul className="row rows-cols-2 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}>
            {hero.superhero}
          </HeroCard>
        ))}
      </ul>
    </div>
  );
};
