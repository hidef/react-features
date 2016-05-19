import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Feature from '../src/components/feature.jsx';
import FeatureContainer from '../src/components/featureContainer.jsx';


const PropsPrinter = (props, context) => <div>{props[props.propsKey]}</div>;

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
    
    it('the children will receive the value of the feature as a prop', function () {
      var rendered = render(<FeatureContainer features={{ foo: 'my feature config value' }}>
        <Feature featureKey="foo">
          <PropsPrinter propsKey='featureConfig' />
        </Feature>
      </FeatureContainer>);
      expect(rendered.text()).to.contain('my feature config value');
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
