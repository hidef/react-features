import React from 'react';


class FeatureContainer extends React.Component {

    constructor(props) {
        super(props);

        // copy this.props.features to context
    }

    getChildContext() {
        return {
            features: this.props.features
        };
    }

    render() {
        return <span>
            {this.props.children}
        </span>;
    }
}

FeatureContainer.propTypes = {
    features: React.PropTypes.object
};

FeatureContainer.defaultProps = {
    features: {}
};

FeatureContainer.childContextTypes = {
    features: React.PropTypes.object
};

export default FeatureContainer;