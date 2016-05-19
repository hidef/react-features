import React from 'react';


class Feature extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var featureConfig = this.context.features[this.props.featureKey];

        if (featureConfig) {
            return <span>
                {this.props.children.map(Child => {
                    return <Child {...featureConfig} />
                }) }
            </span>
        } else {
            return null;
        }
    }
}

Feature.propTypes = {
    featureKey: React.PropTypes.string
};

Feature.contextTypes = {
    features: React.propTypes.object.isRequired
};

export default Feature;

