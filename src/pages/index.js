import SEO from '@components/elements/SEO/SEO';
import Footer from '@components/modules/Footer/Footer';
import IntroSection from '@components/templates/IntroSection/IntroSection';
import SummarySection from '@components/templates/SummarySection/SummarySection';
import * as React from 'react';

const App = () => {
  return (
    <>
      <SEO />
      <IntroSection />
      <SummarySection />
      <Footer />
    </>
  );
};

export default App;
