import React from 'react';
import Riftbound from 'views/Riftbound';
import Seo, { SITE_URL } from 'components/Seo';

const RiftboundPage = (): JSX.Element => {
  return (
    <>
      <Seo
        title="Riftbound Strategy Guide"
        description="Exclusive Riftbound strategy guide covering tempo plans, battlefield control, resource management, and competitive match reading."
        canonical="/riftbound"
        keywords="Riftbound strategy, Riftbound guide, Riftbound coaching, Riftbound meta, League of Legends TCG strategy"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Riftbound Strategy Guide',
          description:
            'Exclusive Riftbound strategy guide for competitive players.',
          author: {
            '@type': 'Person',
            name: 'Philips Nguyen',
            url: SITE_URL,
          },
          mainEntityOfPage: `${SITE_URL}/riftbound`,
        }}
      />
      <Riftbound />
    </>
  );
};

export default RiftboundPage;
