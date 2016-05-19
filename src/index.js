import Feature from './components/feature.jsx';
import FeatureContainer from './components/featureContainer.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render((<FeatureContainer features={{ key: 'cat' }}>
  <h1>Feature 1</h1>
  <Feature featureKey="key">
    <div>active feature</div>
  </Feature>
  <Feature featureKey="notactive">
    <div>in active feature</div>
  </Feature>
</FeatureContainer>), document.getElementById('content'));
