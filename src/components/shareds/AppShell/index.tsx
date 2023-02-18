import {
  ArrowLeftOutlined,
  CompassOutlined,
  DashboardOutlined,
  EnvironmentOutlined,
  HistoryOutlined,
  LogoutOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Drawer, Input, Layout, Menu } from 'antd';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Footer } = Layout;

const AppShell = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const handleNavigation = (path: string) => navigate(path);
  const handleMenuButtonClick = () => setIsMenuDrawerOpen(true);
  const handleMenuDrawerClose = () => setIsMenuDrawerOpen(false);
  const handleGoBack = () => navigate(-1);

  const handleSearch = () => navigate(`/search/?q=${searchTerm}`);
  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === 'Enter' && handleSearch();

  return (
    <Layout style={{ overflow: 'hidden' }}>
      <Header className="header" style={{ zIndex: '100' }}>
        <Button
          className="header-button"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={handleGoBack}
        />

        <Input.Search
          placeholder="Search"
          onSearch={handleSearch}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearchEnter}
        />

        <Button
          className="header-button"
          icon={<MenuOutlined />}
          size="large"
          onClick={handleMenuButtonClick}
        />
      </Header>
      <Layout.Content
        style={{
          minHeight: 'calc(100vh - 64px - 50px)',
          overflow: 'scroll',
          padding: '64px 4px 50px 4px',
        }}
      >
        {children}
      </Layout.Content>
      <Footer>{2}</Footer>

      <Menu
        mode="horizontal"
        theme="dark"
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        onClick={({ key }) => handleNavigation(key)}
      >
        <Menu.Item key="/home" icon={<DashboardOutlined style={{ fontSize: '20px' }} />} />
        <Menu.Item key="/history" icon={<HistoryOutlined style={{ fontSize: '20px' }} />} />
        <Menu.Item key="/locations" icon={<EnvironmentOutlined style={{ fontSize: '20px' }} />} />
        <Menu.Item key="/map" icon={<CompassOutlined style={{ fontSize: '20px' }} />} />
      </Menu>

      <Drawer
        title="Menu"
        placement="right"
        visible={isMenuDrawerOpen}
        onClose={handleMenuDrawerClose}
      >
        <Menu mode="vertical" onClick={({ key }) => handleNavigation(key)}>
          <Menu.Item key="/home" icon={<DashboardOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="/history" icon={<HistoryOutlined />}>
            Delivery History
          </Menu.Item>
          <Menu.Item key="/locations" icon={<EnvironmentOutlined />}>
            Delivery Locations
          </Menu.Item>
          <Menu.Item key="/map" icon={<CompassOutlined />}>
            Delivery Map
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="/account" icon={<UserOutlined />}>
            My Account
          </Menu.Item>
          <Menu.Item key="/help" icon={<QuestionCircleOutlined />}>
            Help &amp; Support
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="/logout" icon={<LogoutOutlined />} style={{ marginTop: 'auto' }}>
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default AppShell;
