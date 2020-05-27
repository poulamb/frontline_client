/* eslint no-unused-vars: 0 */

import React from 'react'
const ReactHighcharts = require('react-highcharts');

const ChartComponent = ({ series, config }) => {
    config.series = series;
    return (
        <ReactHighcharts config={config} />
    )
}

export default ChartComponent