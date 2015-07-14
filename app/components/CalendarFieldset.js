const React = require('react');
const DatePicker = require('react-date-picker');
const newforms = require('newforms')

require('react-date-picker/index.styl');
let date = Date.now();
const startDate = new Date(date);
startDate.setDate(startDate.getDate() - 1);

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

    handleDateChange(dateString, moment) {
        date = dateString;
        this.setState({
            focus: false,
            prettyDate: moment.fromNow(true)
        });
        this.props.onChange(dateString);
    },

    handleSelect: function(dateText, moment) {
        this.handleDateChange(dateText, moment);
    },

    onInputChange: function(e) {
        e.target.value = this.state.prettyDate;
    },

    onInputClick: function() {
        this.setState({
            focus: true
        });
    },

    calendar: function() {
        if (this.state.focus) {
            return (<DatePicker
                date={date}
                dateFormat=""
                hideFooter={true}
                minDate={startDate}
                onChange={this.handleDateChange}
                onSelect={this.handleSelect}
                ref='datePicker'
                weekdays={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
            />);
        }
    },

    date: function() {
        return (<input
            onChange={this.onInputChange}
            onClick={this.onInputClick}
            placeholder='date'
            value={this.state.prettyDate}
         />);
    },

    render: function() {
        return <fieldset>
            { this.props.disabled ? null : this.calendar() }
            { this.state.focus ? null : this.date() }
        </fieldset>
    }
});
