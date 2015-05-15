'use strict';
import React from 'react';
import Note from './Note';

module.exports = React.createClass({
    render() {
        return <div>
            <Note name="Webpack" />
        </div>;
    }
});
