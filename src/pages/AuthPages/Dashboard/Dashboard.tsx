import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import { faChartPie, faChartLine, faCalendarDay, faCoins } from '@fortawesome/free-solid-svg-icons';

import Widget from '../../../components/Widget';
import Card from '../../../components/Card';

import { Area, Calendar, Geo, Bar } from '../../../components/Chart'

import './Dashboard.scss';


const Dashboard: React.FC = () => {

  const onClickEvent = (): void => {
    // teste
  }
  
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
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <Widget iconProp={faCoins} title='Faturamento 24H' value='R$ 1.800,00' onClick={onClickEvent}></Widget>
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <Widget iconProp={faChartLine} title='Compras Efetuadas 24H' value='60' onClick={onClickEvent}></Widget>
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <Widget iconProp={faCalendarDay} title='Anuncios Ativos' value='250' onClick={onClickEvent}></Widget>
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <Widget iconProp={faChartPie} title='Faturamento Total' value='R$ 2.800.650,00' onClick={onClickEvent}></Widget>
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
          <Card title='Vendas Por Anúncio'>
            <Bar />
          </Card>
        </Col>
      </Row>
      <br/>
      <Row className='no-wrap'>
        <Col>
          <Card title='Região do Cliente'>
            <Geo />
          </Card>
        </Col>
        <Col>
           <Card title='Calendário'>
            <Calendar />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;