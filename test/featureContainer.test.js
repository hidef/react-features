import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import FeatureContainer from '../src/components/featureContainer.jsx';


const ContextPrinter = (props, context) => <div>{JSON.stringify(context.features)}</div>;

ContextPrinter.contextTypes = {
  features: React.PropTypes.object
};

describe("A feature container", function () {
  it("renders its children", function () {
    expect(shallow(<FeatureContainer>
      <div className="foo" />
    </FeatureContainer>).contains(<div className="foo" />)).to.equal(true);
  });
  
  it('will exposes the features prop on context to children', function() {
    var features = {a: true, b: false};
    var element = render(<FeatureContainer features={features}>
        <ContextPrinter />
      </FeatureContainer>);
      expect(element[0].children[0].children[0].children[0].data).to.equal(JSON.stringify(features));
  });
});