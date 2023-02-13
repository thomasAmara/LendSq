import React, { useEffect, useState } from 'react';
import { Divider, Layout, Badge, Menu } from 'antd';
import { MenuProps } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Avatar from '../public/images/userImage.png';
import Profile from '../public/images/profileImg.svg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Home from '../public/images/home.svg';
import User from '../public/images/users.svg';
import Gurantor from '../public/images/gurantor.svg';
import Loans from '../public/images/loans.svg';
import HandShake from '../public/images/handShake.svg';
import PiggyBank from '../public/images/piggy-bank.svg';
import LoanRequest from '../public/images/loanRequest.svg';
import Coins from '../public/images/coins.svg';
import Transactions from '../public/images/transactions.svg';
import WhiteList from '../public/images/whitelist.svg';
import Audit from '../public/images/Audit.svg';
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

  const index = 0;
  //   const selected = localStorage.getItem('key');

  //   useEffect(() => {
  //     setActive(selected);
  //   }, [selected]);

  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

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
                    src={Profile}
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
              marginTop: '17px',
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
                mt='12px'
                ml='4px'
                display='flex'
                width='80%'
                // bg='pink'
                // flexDirection='column'
                justifyContent='center'
                // alignItems='center'
                // pb='23px'
                px='16px'
              >
                <Box position='relative'>
                  {index === 0 && (
                    <Image
                      src='/images/briefcase.svg'
                      width={20}
                      height={30}
                      cursor='pointer'
                      alt=''
                    />
                  )}
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
                  className=''
                  icon={<Image src={Home} alt='icon' />}
                  key='1'
                  // style={{ height: '25px' }}
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
                  icon={<Image src={User} alt='icon' />}
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
                <Menu.Item icon={<Image src={Gurantor} alt='icon' />} key='3'>
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/tracking'
                  >
                    Gurantors
                  </Link>
                </Menu.Item>
                <Menu.Item
                  icon={<Image src={Loans} alt='icon' />}
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
                  icon={<Image src={HandShake} alt='icon' />}
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
                  icon={<Image src={PiggyBank} alt='icon' />}
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
                  key='/tracking'
                  icon={<Image src={LoanRequest} alt='icon' />}
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
                  key='5'
                  icon={<Image src={LoanRequest} alt='icon' />}
                >
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/profile'
                  >
                    Transactions
                  </Link>
                </Menu.Item>

                <Menu.Item key='6' icon={<Image src={Coins} alt='icon' />}>
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/billing'
                  >
                    Fees and Charges
                  </Link>
                </Menu.Item>

                <Menu.Item key='7'>
                  <Link
                    shallow={true}
                    style={{ color: '#213F7D' }}
                    href='/help'
                  >
                    Service
                  </Link>
                </Menu.Item>
                <Menu.Item key='8'>
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
                <Menu.Item key='/help' icon={<Image src={Audit} alt='icon' />}>
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
        <Layout>
          <div
            className={side !== 'hide' && 'bodyContainer'}
            style={{ backgroundColor: 'green' }}
          >
            <Content className={side !== 'hide' && 'contentContainer'}>
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
