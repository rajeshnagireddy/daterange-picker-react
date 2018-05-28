import React from 'react';

import DatePicker from 'DatePicker';

import Moment from 'moment';
import { extendMoment } from 'moment-range';


const moment = extendMoment(Moment);
const MoreCalendars = () => (
  <DatePicker numberOfCalendars={2} value={moment.range(new Date(2017, 1, 1), new Date())} />
);

export default MoreCalendars;
