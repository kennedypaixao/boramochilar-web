import React from 'react';
import './OfferDetail.scss';
import { useParams } from 'react-router-dom';

const OfferDetail: React.FC = () => {

  let { id } = useParams();

  return (
    <div className='OfferDetail'>
      detalhes {id}
    </div>
  );
};

export default OfferDetail;