import React from 'react';
import PokemonPocket from 'views/PokemonPocket';
import Seo, { SITE_URL } from 'components/Seo';

const PokemonPocketPage = (): JSX.Element => {
  return (
    <>
      <Seo
        title="Pokémon TCG Pocket Strategy Guide"
        description="Exclusive Pokémon TCG Pocket strategy guide covering deck building, metagame mastery, resource management, and competitive play patterns."
        canonical="/pokemon-pocket"
        keywords="Pokémon TCG Pocket strategy, Pokemon Pocket guide, Pokemon Pocket meta, Pokemon Pocket deck building, competitive Pokemon Pocket"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Pokémon TCG Pocket Strategy Guide',
          description:
            'Exclusive Pokémon TCG Pocket strategy guide for competitive players.',
          author: {
            '@type': 'Person',
            name: 'Philips Nguyen',
            url: SITE_URL,
          },
          mainEntityOfPage: `${SITE_URL}/pokemon-pocket`,
        }}
      />
      <PokemonPocket />
    </>
  );
};

export default PokemonPocketPage;
