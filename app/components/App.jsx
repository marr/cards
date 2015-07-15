'use strict';
import React from 'react';
import { Form, CharField, HiddenInput } from 'newforms';
const CalendarFieldset  = require('./CalendarFieldset');

//const CalendarFieldset  = require('./DatePickerField');



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

    onDateChange(moment) {
        this.state.form.updateData({ date: moment.format() });
    },
    render() {
        return <form>
            <CalendarFieldset onChange={this.onDateChange} />
            {JSON.stringify(this.state.form.cleanedData)}
        </form>;
    }
});
