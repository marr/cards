'use strict';
import React from 'react';
import Note from './Note';
import CreditCardForm from './CreditCardForm';

module.exports = React.createClass({
    render() {
        return <div>
            <Note name="Webpack" />
            <CreditCardForm />
        </div>;
    }
});
