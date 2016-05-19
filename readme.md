[![bitHound Overall Score](https://www.bithound.io/github/uatec/react-features/badges/score.svg)](https://www.bithound.io/github/uatec/react-features)
[![bitHound Dependencies](https://www.bithound.io/github/uatec/react-features/badges/dependencies.svg)](https://www.bithound.io/github/uatec/react-features/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/uatec/react-features/badges/devDependencies.svg)](https://www.bithound.io/github/uatec/react-features/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/uatec/react-features/badges/code.svg)](https://www.bithound.io/github/uatec/react-features)


##Example Usage:

1: Declare your feature configuration:

```
var featureConfig = {
    hello: true,
    worlds: 5
};
```
2: Inject your config in to the feature container, and render your features

```
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

```
class WorldComponent extends React.Component {
    render() {
        return <div>
            {this.props.worlds} worlds
        </div>;
    }
}
```

##Demo
You can view the demo running in webpack-dev-server to see the components in action.

```
npm start
open http://localhost:8080/public
```