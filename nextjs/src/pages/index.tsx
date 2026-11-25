import React from 'react';
import IndexView from 'views/IndexView';
import Seo, { SITE_URL } from 'components/Seo';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Seo
        title="Master Class TCG Coaching | Riftbound, Lorcana, GU, MTG"
        description="Premier trading card game coaching with Philips Nguyen. Improve your skills in Riftbound, Lorcana, Gods Unchained, Magic the Gathering, and Pokémon TCG Pocket."
        canonical="/"
        keywords="TCG coaching, Riftbound coaching, Lorcana coaching, Gods Unchained coaching, MTG coaching, Magic the Gathering coaching, Pokemon Pocket coaching"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Philips Nguyen Master Class TCG Coaching',
          url: SITE_URL,
          description:
            'Premier trading card game coaching for Riftbound, Lorcana, Gods Unchained, Magic the Gathering, and Pokémon TCG Pocket.',
          provider: {
            '@type': 'Person',
            name: 'Philips Nguyen',
            url: SITE_URL,
          },
          areaServed: 'Worldwide',
          serviceType: 'Trading Card Game Coaching',
        }}
      />
      <IndexView />
    </>
  );
};

export default IndexPage;
