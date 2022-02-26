import React from 'react';
import { Row, Col } from 'react-bootstrap';
import OfferItem from './components/OfferItem';

import './OfferList.scss';

const OfferList: React.FC = () => {
  return (
    <div className='OfferList'>
      <Row>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
        <Col sm='12' md='6' lg='4' xl='3' xxl='3'>
          <OfferItem />
        </Col>
      </Row>
    </div>
  );
};

export default OfferList;