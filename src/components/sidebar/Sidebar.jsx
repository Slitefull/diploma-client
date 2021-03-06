import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import { Logo } from '../../styled';

import './style.less';
import { NavLinkItem } from '../header/menu/styled';
import { pagesLinks, pagesTitles } from '../../consts';


library.add(fas);

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = () => setCollapsed(!collapsed);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ background: 'rgb(28 34 55)' }}
    >
      <Logo center src={logo} />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        style={{ background: 'rgb(28 34 55)' }}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLinkItem to="/">Dashboard</NavLinkItem>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLinkItem to={pagesLinks.addGoods}>{pagesTitles.addGoods}</NavLinkItem>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

// TODO normal menu component
// TODO fix close button color
