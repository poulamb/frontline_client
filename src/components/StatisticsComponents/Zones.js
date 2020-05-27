import React from 'react'
import { Series, PieChartConfig, SeriesDataItem } from '@components/ChartComponent/ChartUtils'
import ChartComponent from '@components/ChartComponent/ChartComponent';
import _ from 'lodash'

const transformData = (receivedData) => {
    let groups = _.groupBy(receivedData, (x) => x.zone)
    let seriesData = [];

    _.entries(groups).forEach(item => {
        let data = SeriesDataItem({
            name: item[0],
            y: item[1].length,
            color: item[0],
        })
        seriesData.push(data);
    })

    return seriesData;
};

const StatisticsTable = ({ stateData }) => {

    let series = Series({
        name: 'Zones',
        type: 'pie',
        data: transformData(stateData),
        innerSize: '50%',
    })

    let chartConfig = PieChartConfig({
        title: {
            text: 'Karnataka Zones',
        }
    });

    return (
        <ChartComponent config={chartConfig} series={[series]} />
    )
}

export default StatisticsTable