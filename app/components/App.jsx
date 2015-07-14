'use strict';
import React from 'react';
import { Form, HiddenInput } from 'newforms';
const DatePicker = require('react-date-picker');
const CalendarFieldset  = require('./CalendarFieldset');

const TestForm = Form.extend({
    clean: function() {
        //debugger;
    },
    date: CharField({
        widget: HiddenInput()
    })
});

module.exports = React.createClass({
    getInitialState() {
        const form = new TestForm({
            onChange: this.handleFormChange
        });
        return {
            form: form
        }
    },
    
    handleFormChange() {
        this.forceUpdate();
    },

    onDateChange(dateString) {
        this.state.form.updateData({ date: dateString });
    },
    render() {
        return <form>
            <CalendarFormSet onChange={this.onDateChange} />
            {JSON.stringify(this.state.form.cleanedData)}
        </form>;
    }
});
