import React from 'react';


class Feature extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var featureConfig = this.context.features[this.props.featureKey];
        if (featureConfig) {
            var configMappedChildren = React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { featureConfig: featureConfig });
            });
            return <span>{configMappedChildren}</span>;
        } else {
            return null;
        }
    }
}

Feature.propTypes = {
    featureKey: React.PropTypes.string
};

Feature.contextTypes = {
    features: React.PropTypes.object.isRequired
};

export default Feature;

