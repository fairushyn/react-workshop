import React from 'react';

export default class Link extends React.Component {
    render() {
        return (
            <li>{this.props.message}</li>
        );
    }
}
