import React from 'react';
import Agency from 'views/Agency';
import Seo from 'components/Seo';

const AgencyPage = (): JSX.Element => {
  return (
    <>
      <Seo
        title="About Philips Nguyen | What I'm Playing"
        description="Learn about Philips Nguyen and what competitive trading card games he's currently playing and coaching."
        canonical="/about-me"
        keywords="Philips Nguyen, TCG coach, what I'm playing, competitive card games"
      />
      <Agency />
    </>
  );
};

export default AgencyPage;
