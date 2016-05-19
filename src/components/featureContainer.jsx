import React from 'react';


class FeatureContainer extends React.Component {

    getChildContext() {
        return {
            features: this.props.features,
        };
    }

    render() {
        return (<span>
            {this.props.children}
        </span>);
    }
}

FeatureContainer.propTypes = {
    features: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
};

FeatureContainer.defaultProps = {
    features: {},
};

FeatureContainer.childContextTypes = {
    features: React.PropTypes.object,
};

export default FeatureContainer;
