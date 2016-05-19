import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import FeatureContainer from '../src/components/featureContainer.jsx';

describe("A feature container", function () {
  it("renders its children", function () {
    expect(shallow(<FeatureContainer>
      <div className="foo" />
    </FeatureContainer>).contains(<div className="foo" />)).to.equal(true);
  });
});