/* eslint no-unused-vars: 0 no-extra-boolean-cast: 0 */

import _ from 'lodash'

const defaultSeries = {
    type: 'pie',
    name: 'default',
    innerSize: '50%',
    data: []
}

const Series = (userSeries) => {
    return _.merge(_.assign({}, defaultSeries), userSeries);
}

const defaultConfig = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
    },
    credits: {
        enabled: false
    },
};

const PieChartConfig = (userConfig) => {
    let pieConfig = {
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        }
    }
    let mergedConfig = _.merge(_.assign({}, defaultConfig), pieConfig);
    return !!userConfig ? _.merge(mergedConfig, userConfig) : mergedConfig;
}

const defaultSeriesDataItem = {
    name: 'Other',
    y: 0,
    dataLabels: {
        enabled: true
    }
}

const SeriesDataItem = (userItem) => {
    return _.merge(_.assign({}, defaultSeriesDataItem), userItem);
}

export { Series, PieChartConfig, SeriesDataItem };