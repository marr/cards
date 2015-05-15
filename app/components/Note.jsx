'use strict';
import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <div>Article: {this.props.name}</div>
        );
    }
}
