import React, { useEffect, useState } from 'react';
import { Divider, Layout, Badge, Menu } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Avatar from '../public/images/userImage.png';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Image from 'next/image';
import {
  useMediaQuery,
  Wrap,
  Box,
  Text,
  Menu as Men,
  Image as Img,
  MenuItem,
  WrapItem,
  useDisclosure,
  Button,
  InputRightElement,
  InputGroup,
  Input,
  useQuery,
  toast,
  Select,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children, breadCrumb, title, size, side }) => {
  const [active, setActive] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState([2]);
  const [visible, setVisible] = useState(false);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLargerThan478] = useMediaQuery('(min-width: 478px)');

  const [sideNavState, setSideNavState] = useState('collopsed');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const router = useRouter();

  const styles = {
    color: '#FFF)',
    borderStyle: 'none',
    fontWeight: '400',
    fontSize: '16px',
  };
  //   const selected = localStorage.getItem('key');

  //   useEffect(() => {
  //     setActive(selected);
  //   }, [selected]);

  return (
    <div className='userLayout'>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          padding: '10px',
          height: '80px',
          backgroundColor: '#fff',
          border: '0.3px solid #BBC5C9',
        }}
        className='site-layout-sub-header-background'
      >
        <div className='headerDetail'>
          <div className='headerLogo'>
            <Box alignSelf='center'>
              <Link href='/dashboard'>
                <Image
                  width={200}
                  height={200}
                  src='/images/logo.svg'
                  alt='Logo'
                />
              </Link>
            </Box>
          </div>
          <div className='headerRight'>
            <Box className='searchBox'>
              <InputGroup>
                <Input
                  _focus={{ border: '1px solid #227b7a' }}
                  _selected={{ border: '1px solid #213F7D' }}
                  placeholder='Search for anything'
                />
                <InputRightElement>
                  <Button
                    backgroundColor='#39CDCC'
                    rightIcon={<SearchIcon color='#FFF' />}
                    _hover={{ bg: '#227b7a' }}
                  ></Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box className='userNotifications'>
              <Box alignSelf='center' cursor='pointer'>
                <Text
                  textDecoration='underline'
                  fontWeight='400'
                  fontSize='16px'
                  color='#213F7D'
                >
                  Docs
                </Text>
              </Box>
              <Box d='flex' cursor='pointer'>
                <Box alignSelf='center'>
                  <Badge alignSelf='center'>
                    <IoMdNotificationsOutline size='34' color='#213F7D' />
                  </Badge>
                </Box>
              </Box>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                cursor='pointer'
              >
                <Box>
                  <Image
                    borderRadius='full'
                    boxSize='30px'
                    objectFit='cover'
                    style={{
                      objectFit: 'cover',
                      borderRadius: '100px',
                      alignSelf: 'center',
                    }}
                    src={Avatar}
                    alt='Adedeji'
                  />
                </Box>
                <Box alignSelf='center' ml='10px'>
                  <Select
                    placeholder='Adedeji'
                    width='fit-content'
                    cursor='pointer'
                    style={styles}
                    variant='unstyled'
                    _selected={{ borderColor: 'none' }}
                  >
                    Switch Organisation
                  </Select>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </Header>
      <Layout>
        {side !== 'hide' && (
          <Sider
            style={{
              height: '100vh',
              position: 'fixed',
              left: 0,
              //   zIndex: 1000,
              backgroundColor: '#F9F9FB',
              minWidth: '250px !important',
            }}
            breakpoint='lg'
            collapsedWidth='0'
            width='280px'
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
              if (collapsed) {
                setSideNavState('collapsed');
              } else {
                setSideNavState('expanded');
              }
            }}
          >
            <div className='sideGroup'>
              <Box
                height='40px'
                d='flex'
                // justifyContent='center'
                mt='20px'
                mb='20px'
                ml='30px'
              ></Box>

              <Box
                mt='22px'
                ml='40px'
                display='flex'
                // flexDirection='column'
                // justifyContent='center'
                // alignItems='center'
                // pb='23px'
                // px='16px'
              >
                <Select
                  placeholder='Switch Organisation'
                  width='fit-content'
                  cursor='pointer'
                  style={styles}
                  //   value={1}
                  variant='unstyled'
                  _selected={{ borderColor: 'none' }}
                >
                  Switch Organisation
                </Select>
              </Box>
              <Menu
                theme='light'
                onClick={(key) => {
                  const keys = key.key;
                  localStorage.setItem('key', keys);
                }}
                mode='inline'
                selectedKeys={[router.pathname]}
                // defaultSelectedKeys={[`/dashboard`]}
                defaultSelectedKeys={['2']}
                openKeys={openKeys}
                // onOpenChange={onOpenChange}
              >
                <Menu.Item
                  // className=""
                  //   icon={<HomeIcon />}
                  key='1'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/dashboard'
                    fontSize='14px'
                    fontWeight='300'
                    fontFamily='Lato'
                  >
                    Dashboard
                  </Link>
                </Menu.Item>
                <Box
                  cursor='pointer'
                  display='flex'
                  justifyContent='flex-start'
                  align-item='center'
                  width='90%'
                  mt='10px'
                  mb='15px'
                  p='0px 20px'
                >
                  <Box mt='20px' ml='8px' mb='20px'>
                    <Text
                      fontSize='12px'
                      color='#213F7D'
                      textTransform='uppercase'
                      fontWeight='500'
                    >
                      Customer
                    </Text>
                  </Box>
                </Box>
                <Menu.Item
                  // className=""
                  //   icon={<BoxIcon color='blue' />}
                  key='/dashboard'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='shipment'
                  >
                    Users
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<MapIcon />}
                  key='/gurantor'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Gurantors
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<MapIcon />}
                  key='/tracking'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Loans
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<MapIcon />}
                  key='/tracking'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Decision Models
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<MapIcon />}
                  key='/tracking'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Saving
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<MapIcon />}
                  key='/tracking'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Loan Request
                  </Link>
                </Menu.Item>
                <Box
                  cursor='pointer'
                  display='flex'
                  justifyContent='flex-start'
                  align-item='center'
                  width='90%'
                  mt='10px'
                  mb='15px'
                  p='0px 20px'
                >
                  <Box mt='20px' ml='8px' mb='20px'>
                    <Text
                      fontSize='12px'
                      color='#213F7D'
                      textTransform='uppercase'
                      fontWeight='500'
                    >
                      Business
                    </Text>
                  </Box>
                </Box>

                <Menu.Item
                  // className=""
                  //   icon={<ProfileIcon />}
                  key='5'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/profile'
                  >
                    Loans
                  </Link>
                </Menu.Item>

                <Menu.Item
                  // className=""
                  //   icon={<BillingIcon />}
                  key='6'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/billing'
                  >
                    Billing
                  </Link>
                </Menu.Item>

                <Menu.Item
                  // className=""
                  //   icon={<helpIcon />}
                  key='7'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/help'
                  >
                    Help/Supports
                  </Link>
                </Menu.Item>
                <Menu.Item
                  // className=""
                  //   icon={<ChartIcon />}
                  key='8'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/billing'
                  >
                    Report
                  </Link>
                </Menu.Item>
                <Box
                  cursor='pointer'
                  display='flex'
                  justifyContent='flex-start'
                  align-item='center'
                  width='90%'
                  mt='10px'
                  mb='15px'
                  p='0px 20px'
                >
                  <Box mt='20px' ml='8px' mb='20px'>
                    <Text
                      fontSize='12px'
                      color='#213F7D'
                      textTransform='uppercase'
                      fontWeight='500'
                    >
                      Setting
                    </Text>
                  </Box>
                </Box>
                <Menu.Item
                  // className=""

                  //   icon={<LogoutIcon />}
                  key='/help'
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/dashboard'
                  >
                    Audit Log
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
        )}
        <Layout style={{ width: 'auto', backgroundColor: '#F9FAFB' }}>
          <div className='bodyContainer'>
            <Content>
              <div className='dashBoardTitle'>{title}</div>
              <div className='crumbs'>{breadCrumb}</div>
              <div className='site-layout-backgrounds'>{children}</div>
            </Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
