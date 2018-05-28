import React from 'react';

import moment from 'moment';
import {} from 'moment-range';

import Month from 'components/Month';

import 'styles/datePicker.scss';
import 'styles/app.scss';

/**
* Handle Arrow keys
* Pass on Month & year
* Handle theme
* Handle outside prop values
**/
class DatePicker extends React.Component {
  static defaultProps = {
    	isRange: true,
    	numberOfCalendars: 1,
  }

  constructor(props) {
    super(props);
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    if (props.value) {
      if (props.isRange) {
        year = props.value.start.year();
        month = props.value.start.month();
      } else {
        year = props.value.year();
        month = props.value.month();
      }
    }

    this.state = {
      year,
      month,
    };

    this.renderCalendar = this.renderCalendar.bind(this);
  }

  getStateMoment() {
    return moment(new Date(this.state.year, this.state.month, 1));
  }

  navigate(next) {
    let { year, month } = this.state;
    month += next;
    if (month <= 0) {
      month = 11;
      year--;
    }

    this.setState({ year, month });
  }


  renderCalendar(index) {
    const stateMoment = this.getStateMoment();
    stateMoment.add(index, 'months');

    return <Month key={index} year={stateMoment.get('year')} month={stateMoment.get('month')} />;
  }

  render() {
    const { numberOfCalendars } = this.props;

    return (
      <div className="date-picker">
        <div className="date-picker__page-left" onClick={() => this.navigate(-1)}> <span></span> </div>
        {[...Array(numberOfCalendars).keys()].map(this.renderCalendar)}
        <div className="date-picker__page-right" onClick={() => this.navigate(1)}> <span></span> </div>
      </div>
    );
  }

}

export default DatePicker;
