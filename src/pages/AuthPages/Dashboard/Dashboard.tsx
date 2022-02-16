import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { faChartPie, faChartLine, faCalendarDay, faCoins } from '@fortawesome/free-solid-svg-icons';

import Widget from 'components/Widget';
import Card from 'components/Card';

import { Area, Calendar, Geo, Bar } from 'components/Chart'

import './Dashboard.scss';


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
            <Area />
          </Card>
        </Col>
        <Col>
          <Card title='Calendário'>
            <Calendar />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row className='no-wrap'>
      <Col>
          <Card title='Vendas Por Anúncio'>
            <Bar />
          </Card>
        </Col>
        <Col>
          <Card title='Regiões de Clientes'>
            <Geo />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;