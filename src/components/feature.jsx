import React from 'react';


class Feature extends React.Component {

    render() {
        const featureConfig = this.context.features[this.props.featureKey];
        if (featureConfig) {
            let configMappedChildren = React.Children.map(this.props.children,
                child => React.cloneElement(child, { featureConfig }));
            return <span>{configMappedChildren}</span>;
        }
        return null;
    }
}

Feature.propTypes = {
    featureKey: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
};

Feature.contextTypes = {
    features: React.PropTypes.object.isRequired,
};

export default Feature;

