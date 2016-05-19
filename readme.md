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