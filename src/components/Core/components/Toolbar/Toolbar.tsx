import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ToolbarProps } from './Toolbar.types';

import './Toolbar.scss';

const Toolbar: React.FC<ToolbarProps> = ({ onMenuToggle, pageName }) => {

  return (
    <nav className='Toolbar'>
      <button className='btn-menu' onClick={onMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h2 className='page-title'>
        {pageName}
      </h2>
    </nav>
  );
};

Toolbar.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  pageName: PropTypes.string.isRequired
}

export default Toolbar;