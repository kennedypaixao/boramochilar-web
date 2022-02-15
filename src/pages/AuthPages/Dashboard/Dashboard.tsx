import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { faChartPie, faChartLine, faCalendarDay, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Chart, ChartWrapperOptions } from "react-google-charts";

import Widget from 'components/Widget';
import Card from 'components/Card';

import './Dashboard.scss';

export const data = [
  ["Year", "Sales"],
  ["2013", 1000],
  ["2014", 1170],
  ["2015", 660],
  ["2016", 1030],
  ["2017", 2030],
  ["2018", 3030],
];

const optionsCalendar = {
  isStacked: true,
  height: 400,
  legend: { position: "top", maxLines: 6, visible: false },
  vAxis: { minValue: 0 },
};

const dataCalendar = [
  [
    { type: "date", id: "Date" },
    { type: "number", id: "Won/Loss" },
  ],
  [new Date(2022, 2, 4), 10],
  [new Date(2022, 2, 5), 3],
  [new Date(2022, 2, 7), -1],
  [new Date(2022, 2, 8), 2],
  [new Date(2022, 2, 12), -1],
  [new Date(2022, 2, 13), 1],
  [new Date(2022, 2, 15), 1],
  [new Date(2022, 2, 16), -4],
  [new Date(2022, 1, 4), 10],
  [new Date(2022, 1, 5), 3],
  [new Date(2022, 1, 7), -1],
  [new Date(2022, 1, 8), 2],
  [new Date(2022, 1, 12), -1],
  [new Date(2022, 1, 13), 1],
  [new Date(2022, 1, 15), 1],
  [new Date(2022, 1, 16), -4],
];

export const options = {
  title: "Red Sox Attendance",
  height: 400,
};

const Dashboard: React.FC = () => {
  
  return (
    <div className='Dashboard'>
      <Row>
        <Col>
          <h1 className='title-name'>
            Bem vindo, <span>Kennedy Paixão.</span>
          </h1>
          </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Widget iconProp={faCoins} title='Faturamento 24H' value='R$ 1.800,00' onClick={() => {}}></Widget>
        </Col>
        <Col>
          <Widget iconProp={faChartLine} title='Compras Efetuadas 24H' value='60' onClick={() => {}}></Widget>
        </Col>
        <Col>
          <Widget iconProp={faCalendarDay} title='Anuncios Ativos' value='250' onClick={() => {}}></Widget>
        </Col>
        <Col>
          <Widget iconProp={faChartPie} title='Faturamento Total' value='R$ 2.800.650,00' onClick={() => {}}></Widget>
        </Col>
      </Row>
      <br/>
      <Row className='no-wrap'>
        <Col>
          <Card title='Faturamento'>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </Card>
        </Col>
        <Col>
          <Card title='Calendário'>
            <Chart
               chartType="Calendar"
               width="100%"
               height="400px"
               data={dataCalendar}
               options={optionsCalendar}
            />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row className='no-wrap'>
      <Col>
          <Card title='Calendário'>
            <Chart
               chartType="Calendar"
               width="100%"
               height="400px"
               data={dataCalendar}
               options={optionsCalendar}
            />
          </Card>
        </Col>
        <Col>
          <Card title='Faturamento'>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;