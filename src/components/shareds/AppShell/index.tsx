import {
  ArrowLeftOutlined,
  CompassOutlined,
  DashboardOutlined,
  EnvironmentOutlined,
  HistoryOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Button, Drawer, Layout, Menu } from 'antd';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Footer } = Layout;

const AppShell = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const handleNavigation = (path: string) => navigate(path);
  const handleMenuButtonClick = () => setIsMenuDrawerOpen(true);
  const handleMenuDrawerClose = () => setIsMenuDrawerOpen(false);
  const handleGoBack = () => navigate(-1);

  return (
    <Layout>
      <Header className="header">
        <Button
          className="header-button"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={handleGoBack}
        />

        <Button
          className="header-button"
          icon={<MenuOutlined />}
          size="large"
          onClick={handleMenuButtonClick}
        />
      </Header>
      <Layout.Content style={{ minHeight: 'calc(100vh - 64px - 50px)', paddingTop: '64px' }}>
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
        open={isMenuDrawerOpen}
        onClose={handleMenuDrawerClose}
      >
        <Menu mode="vertical" onClick={({ key }) => handleNavigation(key)}>
          <Menu.Item key="/home" icon={<DashboardOutlined />} />
          <Menu.Item key="/history" icon={<HistoryOutlined />} />
          <Menu.Item key="/locations" icon={<EnvironmentOutlined />} />
          <Menu.Item key="/map" icon={<CompassOutlined />} />
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default AppShell;
