# react-features

[![bitHound Overall Score](https://www.bithound.io/github/uatec/react-features/badges/score.svg)](https://www.bithound.io/github/uatec/react-features)
[![bitHound Dependencies](https://www.bithound.io/github/uatec/react-features/badges/dependencies.svg)](https://www.bithound.io/github/uatec/react-features/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/uatec/react-features/badges/devDependencies.svg)](https://www.bithound.io/github/uatec/react-features/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/uatec/react-features/badges/code.svg)](https://www.bithound.io/github/uatec/react-features)
[![Travis CI Build](https://api.travis-ci.org/uatec/react-features.svg)](https://travis-ci.org/uatec/react-features)

## Get Started

This package is available on npm as [react-features](https://www.npmjs.com/package/react-features).

## Example Usage

1: Declare your feature configuration:

``` javascript
var featureConfig = {
    hello: true,
    worlds: 5
};
```

2: Inject your config in to the feature container, and render your features

``` javascript
<FeatureContainer features={featureConfig}>
    <Feature featureKey='hello'>
        <h1>
            Hello,
        </h1>
    </Feature>
    <Feature featureKey="worlds">
        <WorldComponent />
    </Feature>
</FeatureContainer>
```

3: Consume your feature config in a component as props

``` javascript
class WorldComponent extends React.Component {
    render() {
        return <div>
            {this.props.worlds} worlds
        </div>;
    }
}
```

## Demo

You can view the demo running in webpack-dev-server to see the components in action.

``` javascript
npm start
open http://localhost:8080/public
```