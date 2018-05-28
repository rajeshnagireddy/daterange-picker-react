import React from 'react';
import calendar from 'calendar';

import Date from 'components/Date';


/*
* Render month calender based on props
* Capture selected, highlight date
* Pass on hight light & selected info
* Handle month & year changes
*/
class Month extends React.Component {

  render() {
    const { month, year } = this.props;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const cal = new calendar.Calendar();
    const weeks = cal.monthDays(this.props.year, this.props.month);
    const pastYear = month ? year : year - 1;
    const pastMonth = month ? month - 1 : 11;
    const pastWeeks = cal.monthDays(pastYear, pastMonth);
    let nextDates = 1;

    return (
      <div className="date-picker__month">
        <div className="date-picker__month-head">
          <span>{months[this.props.month]}</span> <span>{this.props.year}</span>
        </div>
        <table className="date-picker__month-body">
          <thead>
            <tr>
              <th className="date-picker__week-head">Sun</th>
              <th className="date-picker__week-head">Mon</th>
              <th className="date-picker__week-head">Tue</th>
              <th className="date-picker__week-head">Wed</th>
              <th className="date-picker__week-head">Thu</th>
              <th className="date-picker__week-head">Fri</th>
              <th className="date-picker__week-head">Sat</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, index) => (
              <tr key={index}>
                {week.map((day, innerIndex) => (
                  <Date key={innerIndex} className={day === 0 ? 'date-picker__week-date--past' : ''} value={day || (index === 0 ? pastWeeks[pastWeeks.length - 1][innerIndex] : nextDates++)} />
								))}
              </tr>
						))}
          </tbody>
        </table>
      </div>
    );
  }

}

export default Month;
