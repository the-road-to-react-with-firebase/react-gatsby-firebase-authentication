import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import withAuthentication from '../components/Session/withAuthentication';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Firebase Authentication"
      meta={[
        { name: 'description', content: 'Gatsby Firebase Authentication' },
        { name: 'keywords', content: 'Gatsby Firebase Authentication' },
      ]}
    />
    <div className="app">
      <Navigation />

      <hr/>

      {children()}
    </div>
  </div>
);

export default withAuthentication(TemplateWrapper)
