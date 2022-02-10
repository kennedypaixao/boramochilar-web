import React from 'react';
import PropTypes from 'prop-types';
import { ProSidebar,SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import BgImage from 'assets/image/login_background.jpg';
import { Link } from 'react-router-dom';
import { SidebarProps } from './Sidebar.types';

import './Sidebar.scss';

const Sidebar: React.FC<SidebarProps> = ({ collapse }) => {

  return (
    <div className='Sidebar-Menu'>
      <ProSidebar image={BgImage} collapsed={collapse}> 
        <SidebarHeader>
          <div className='menu-header'>
            Bora Mochilar
          </div>
        </SidebarHeader>
        <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<FontAwesomeIcon icon={faChartPie} />}>
              Dashboard
              <Link to="/Dashboard" />
            </MenuItem>
          <SubMenu icon={<FontAwesomeIcon icon={faSpaceShuttle} />} title="Anúncios">
            <MenuItem>
              Gerenciamento
              <Link to="/Anuncios/Gerenciamento" /> 
            </MenuItem>
          </SubMenu>
        </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

Sidebar.propTypes = {
  collapse: PropTypes.bool.isRequired
}

export default Sidebar;