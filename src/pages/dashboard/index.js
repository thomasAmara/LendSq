import React, { useEffect } from 'react';
import DashboardLayout from 'components/dashboardLayout';
import {
  Box,
  Text,
  Wrap,
  useMediaQuery,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Table, Pagination, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { view } from '../../../components/Reducers/customerReducer/Action';
import More from '../../../public/images/more.png';
import Link from 'next/link';
import moment from 'moment';
import Saving from '../../../public/images/userSaving.svg';
import Active from '../../../public/images/userIcons.svg';
import Report from '../../../public/images/loanReport.svg';
import User from '../../../public/images/activeUsers.svg';
import ActivateUser from '../../../public/images/ActivateUser.svg';
import Eye from '../../../public/images/Eye.svg';
import Blacklist from '../../../public/images/blacklistUser.svg';
import Filter from '../../../public/images/filterIcon.svg';

function Dashboard() {
  const [id, setID] = React.useState('');
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [isLessThan480] = useMediaQuery('(max-width: 480px)');
  const [isLargerThan478] = useMediaQuery('(min-width: 478px)');

  const tableData = [];

  useEffect(() => {
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    {
      //   title: ('<>
      //   <Filter /> 546
      // </> ')
      //    ,
      title: (filters, sortOrder) => <div>Title</div>,
      dataIndex: 'orgName',
      key: 'name',
    },
    {
      title: 'USER',
      dataIndex: 'userName',
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phoneNumber',
      render: (item) => Object.values(item),
    },
    {
      title: 'DATE JOINED',
      dataIndex: 'createdAt',
      render: (value) => {
        return <span>{moment(value).format('lll')}</span>;
      },
    },
    {
      title: 'STATUS',
    },
    {
      // title: 'Actions',
      dataIndex: 'address',
      key: 'id',
      // eslint-disable-next-line react/display-name
      render: (text, record) => (
        <Popover
          onClick={() => {
            dispatch(view(record));
          }}
          placement='bottom'
          trigger='click'
          content={
            <Wrap direction='column'>
              <Button
                borderRadius={6}
                bg='transparent'
                fontSize={14}
                fontWeight='normal'
                leftIcon={<Image alt='up' src={Eye} />}
              >
                <Link href={`/userDetails/${record?.id}`} passHref>
                  View Details
                </Link>
              </Button>
              <Button
                borderRadius={6}
                bg='transparent'
                fontSize={14}
                fontWeight='normal'
                leftIcon={<Image alt='up' src={Blacklist} />}
              >
                Blacklist User
              </Button>
              <Button
                borderRadius={6}
                bg='transparent'
                fontSize={14}
                fontWeight='normal'
                leftIcon={<Image alt='up' src={ActivateUser} />}
              >
                Activate User
              </Button>
            </Wrap>
          }
        >
          <Image style={{ cursor: 'pointer' }} src={More} alt='more' />
        </Popover>
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Box className='home' bg='#E5E5E5' p='20px 20px'>
        <Box pl='40px' pb='20px' mb='20px'>
          <Text fontSize='24px' fontWeight='500' color='#21357D'>
            USER
          </Text>
          <Box mt='10px'>
            <Stack justify='space-between' direction={['column', 'row']}>
              {userData.map((data, index) => {
                return (
                  <Box
                    className='customerContainer'
                    border='1px solid blue'
                    key={index}
                  >
                    <Box
                      bg={
                        index === 0
                          ? '#F5BAFF'
                          : index === 1
                          ? '#CBDAFF'
                          : index === 2
                          ? '#FCCFC7'
                          : index === 3
                          ? '#FFB2CF'
                          : null
                      }
                      w='45px'
                      height='45px'
                      opacity='4'
                      borderRadius='100%'
                      display='flex'
                      justifyContent='center'
                    >
                      <Image
                        src={data.image}
                        alignSelf='center'
                        width='40px'
                        margin='auto'
                        height='40px'
                        alt=''
                      />
                    </Box>
                    <Box mt='7px'>
                      <Text
                        fontSize='14px'
                        fontWeight='500'
                        textTransform='uppercase'
                        color='#54577D'
                      >
                        {data.title}
                      </Text>{' '}
                    </Box>
                    <Box mt='5px'>
                      {' '}
                      <Text
                        fontSize='24px'
                        fontWeight='600'
                        textTransform='uppercase'
                        color='#213F7D'
                      >
                        {data.value}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
            <Box mt='20px' mb='20px'>
              <Table
                size='small'
                pagination={{ pageSize: 10, showSizeChanger: false }}
                total={10}
                style={{
                  overflow: 'hidden',
                  overflowX: 'scroll',
                  borderColor: '#fff',
                  padding: '5px',
                }}
                columns={columns}
                dataSource={data}
                rowSelection={id}
                components={{
                  Pagination: (props) => (
                    <div style={{ float: 'right', padding: '20px' }}>
                      <Pagination pageSize={10} />
                    </div>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

const userData = [
  { title: 'User', value: 2453, image: Active },
  {
    title: 'Active Users',
    value: 2453,
    image: User,
  },
  {
    title: 'User with loans',
    value: '12,453',
    image: Report,
  },
  {
    title: 'User woth savings',
    value: '102,453',
    image: Saving,
  },
];
export default Dashboard;
