/* eslint no-unused-vars: 0 */

import React from 'react'
import { Card, Avatar, Typography } from 'antd';
const { Title } = Typography;

const { Meta } = Card
const getIconPath = (icon) => {
    return '/images/' + icon;
}
const StatisticsCard = ({ icon, title, value, units, desc }) => {
    return (
        <Card hoverable>
            <Meta
                avatar={<Avatar src={getIconPath(icon)} />}
                title={<Title level={3}>{value + ' ' + units}</Title>}
                description={desc} />
        </Card>
    )
}

export default StatisticsCard
