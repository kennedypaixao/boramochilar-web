import React from 'react';
import { Card } from 'react-bootstrap';
import OfferImage from '../../../../../../../assets/image/offer.jpg';

import './OfferItem.scss';

const OfferItem: React.FC = () => {
  return (
    <div className='OfferItem'>
      <Card>
        <Card.Img variant="top" src={OfferImage} />
        <Card.Body>
          <Card.Title>SÃO THOMÉ DAS LETRAS + FESTA JUNINA + COMIDAS TÍPICAS + CERVEJADAS + PASSEIO NAS CACHOEIRAS.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> 
            São Paulo - São Thomé das Letras 
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> 
            Datas: 
            <span className='highlight'>10/05/2022 - 11/06/2022</span>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> 
            Quantidade:
            <span className='highlight'>10</span>/50 
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Card.Title className='price'>
            R$ 590,00 
            <small>(por pessoa)</small>
          </Card.Title>
        </Card.Footer>
     </Card>
    </div>
  );
};

export default OfferItem;