import React from 'react';
const DatePicker = require('react-datepicker');
const moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

module.exports = React.createClass({
    
    getDefaultProps: function() {
        return {
            disabled: false
        };
    },

    getInitialState: function() {
       return {
            focus: false,
            prettyDate: '',
            selected: this.props.selected
        };
    },

    handleDateChange(moment) {
        this.setState({
            selected: moment,
            focus: false,
            prettyDate: moment.fromNow(true)
        });
        this.props.onChange(moment);
    },

    calendar: function() {
        return (<DatePicker
            selected={this.state.selected}
            dateFormat=""
            minDate={moment()}
            onChange={this.handleDateChange}
            ref='datePicker'
            weekdays={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
        />);
    },

    render() {
        return this.state.disabled ? null : this.calendar();
    }
});

