'use strict';
import React from 'react';

var
    t = require('tcomb-form'),
    Form = t.form.Form,
    CreditCard = t.struct({
        number: t.Str,
        security: t.Str
    });

export default class CreditCardForm extends React.Component {
    render() {
        return <div>
            <Form type={CreditCard} onChange={this.onChange}/>
        </div>;
    }
}

CreditCardForm.prototype.onChange = function(rawValue) {
    console.log(rawValue); // not firing
};
