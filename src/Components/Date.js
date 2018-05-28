import React from 'react';


/*
* Hanlde Mouse enter, leave, Touch start, touch end and pass on the values th parent
* Render date label as per the props
* Render highlights, selections, hover;
*/
class Date extends React.Component {

  render() {
    const { className, value } = this.props;

    return (
      <td className={`date-picker__week-date ${className}`}>
        <span className="date-picker__week-date__label">{value}</span>
      </td>
    );
  }

}

export default Date;
