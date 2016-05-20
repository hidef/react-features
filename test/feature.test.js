import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Feature from '../src/components/feature.jsx';
import FeatureContainer from '../src/components/featureContainer.jsx';


const PropsPrinter = (props) => <div>{props[props.propsKey]}</div>;
PropsPrinter.propTypes = { propsKey: React.PropTypes.string.isRequired };

describe('A feature', () => {
    describe('When a feature key is defined in the `features` context element', () => {
        it('it will render the features children', () => {
            const rendered = render(<FeatureContainer features={{ foo: true }}>
              <Feature featureKey="foo">
                <div>
                  hello world
                </div>
              </Feature>
            </FeatureContainer>);
            expect(rendered.text()).to.contain('hello world');
        });

        it('the children will receive the value of the feature as a prop', () => {
            const rendered = render(<FeatureContainer features={{ foo: 'my feature config value' }}>
              <Feature featureKey="foo">
                <PropsPrinter propsKey="featureConfig" />
              </Feature>
            </FeatureContainer>);
            expect(rendered.text()).to.contain('my feature config value');
        });
    });

    describe('When a feature key is undefined in the `features` context element', () => {
        it('it will not render the features children', () => {
            expect(render(<FeatureContainer features={{}}>
              <Feature featureKey="foo">
                <div className="foo" />
              </Feature>
            </FeatureContainer>).find(<div className="foo" />)).to.have.length(0);
        });
    });
});

describe('When a feature key is false in the `features` context element', () => {
    it('it will not render the features children', () => {
        expect(render(<FeatureContainer features={{ foo: false }}>
          <Feature featureKey="foo">
            <div className="foo" />
          </Feature>
        </FeatureContainer>).find(<div className="foo" />)).to.have.length(0);
    });
});
