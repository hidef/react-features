import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Feature from '../src/components/feature.jsx';
import FeatureContainer from '../src/components/featureContainer.jsx';

describe("A feature", function () {
  describe("When a feature key is defined in the `features` context element", function () {
    it('it will render the features children', function () {
      var rendered = render(<FeatureContainer features={{ foo: true }}>
        <Feature featureKey="foo">
          <div>
            hello world
          </div>
        </Feature>
      </FeatureContainer>);
      expect(rendered.text()).to.contain('hello world');
    });
  });

  describe("When a feature key is undefined in the `features` context element", function () {
    it('it will not render the features children', function () {
      expect(render(<FeatureContainer features={{}}>
        <Feature featureKey="foo">
          <div className="foo" />
        </Feature>
      </FeatureContainer>).find(<div className="foo" />)).to.have.length(0);
    });
  });
});

describe("When a feature key is false in the `features` context element", function () {
  it('it will not render the features children', function () {
    expect(render(<FeatureContainer features={{ foo: false }}>
      <Feature featureKey="foo">
        <div className="foo" />
      </Feature>
    </FeatureContainer>).find(<div className="foo" />)).to.have.length(0);
  });
});
