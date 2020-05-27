import React, { useEffect } from "react";
import { connecter } from "@store/statsDashboard";
import { Row, Col, Divider, Space } from "antd";
import StatisticsCard from "@components/StatisticsComponents/DataCard";
import Zones from "@components/StatisticsComponents/Zones";

const StatsDashboard = ({
    statCardData,
    getStatCardData,
    zoneData,
    getZoneData,
}) => {

    useEffect(() => {
        getZoneData();
    }, [])

    useEffect(() => {
        getStatCardData();
    }, [])

    return (
        <div style={{ textAlign: "left" }}>
            <Divider />
            <Row gutter={{ xs: 8, sm: 16, md: 24 }} >
                <Col span={24} className="gutter-row">
                    <Space align='center'>
                        {statCardData.map((data) => <StatisticsCard key={data.title} {...data} />)}
                    </Space>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col xs={24} md={12} className="gutter-row">
                    <Zones stateData={zoneData} />
                </Col>
            </Row>
        </div>
    )
};

export default connecter(StatsDashboard);
