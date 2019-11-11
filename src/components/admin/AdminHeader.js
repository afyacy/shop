import React from 'react';
import {Container,Menu} from 'semantic-ui-react';

import '../../styles/admin/productadmin.css';


const AdminHeader = () => (
  <div>
    <Menu fixed='top' className='topMenu'>
      <Container>
        <Menu.Item header className='productadminT'>
          <h2>PRODUCT ADMIN</h2>
        </Menu.Item>
        <Menu.Item className='topMenuItems'>
            <p>Dashboard</p>
        </Menu.Item>
        <Menu.Item className='topMenuItems'>
            <p>Dashboard</p>
        </Menu.Item>
        <Menu.Item className='topMenuItems'>
            <p>Dashboard</p>
        </Menu.Item>
        <Menu.Item position='right' className='topMenuItems'>
            <p>Admin, logout</p>
        </Menu.Item>
        
      </Container>
    </Menu>
  </div>
)

export default AdminHeader;