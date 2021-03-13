import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.svg';
import { pagesLinks, pagesTitles } from '../../consts';

import './style.less';
import { Logo } from '../../styled';
import { NavLinkItem } from '../header/menu/styled';


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
          <NavLinkItem to="/">{pagesTitles.dashboard}</NavLinkItem>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLinkItem to={pagesLinks.addGoods}>{pagesTitles.addGoods}</NavLinkItem>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <NavLinkItem to={pagesLinks.users}>{pagesTitles.users}</NavLinkItem>
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          <NavLinkItem to={pagesLinks.settings}>{pagesTitles.settings}</NavLinkItem>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

// TODO normal menu component
