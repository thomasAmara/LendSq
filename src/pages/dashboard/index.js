import React, { useEffect } from 'react';
import DashboardLayout from 'components/dashboardLayout';
import {
  Box,
  Text,
  Wrap,
  useMediaQuery,
  Stack,
  Button,
  Icon,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { Table, Pagination, Popover } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { view } from '../../../components/Reducers/customerReducer/Action';
import More from '../../../public/images/more.png';
import Link from 'next/link';
import moment from 'moment';
import { UseMediaQuery } from '../../../components/MediaQuery';
import Saving from '../../../public/images/userSaving.svg';
import Active from '../../../public/images/userIcons.svg';
import Report from '../../../public/images/loanReport.svg';
import User from '../../../public/images/activeUsers.svg';
import ActivateUser from '../../../public/images/activateUser.svg';
import Eye from '../../../public/images/Eye.svg';
import Blacklist from '../../../public/images/blacklistUser.svg';
import Filter from '../../../public/images/filterIcon.svg';
import FilterModal from 'components/Modal/Filter';

function Dashboard() {
  const [id, setID] = React.useState('');
  const [data, setData] = React.useState([]);
  const isLargerThan480 = UseMediaQuery(480);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      title: () => (
        <Flex
          cursor='pointer'
          alignItems='center'
          justifyContent='space-evenly'
          onClick={onOpen}
        >
          <Text ml='20px'>ORGANISATION</Text>
          <Image src={Filter} width='30px' height='30px' alt='' />
        </Flex>
      ),
      dataIndex: 'orgName',
      key: 'name',
      responsive: ['xs'],
    },
    {
      title: () => (
        <Flex>
          <Text>USERNAME</Text>
          <Image src={Filter} width='30px' height='30px' alt='' />
        </Flex>
      ),
      dataIndex: 'userName',
      // responsive: ['xs'],
    },
    {
      title: () => (
        <Flex>
          <Text>EMAIL</Text>
          <Image src={Filter} width='30px' height='30px' alt='' />
        </Flex>
      ),
      dataIndex: 'email',
      // width: 100,
    },
    {
      title: () => (
        <Flex>
          <Text>PHONE NUMBER</Text>
          <Image src={Filter} width='30px' height='30px' alt='' />
        </Flex>
      ),
      dataIndex: 'phoneNumber',
      render: (item) => Object.values(item),
      // responsive: ['xs'],
    },
    {
      title: () => (
        <Flex>
          <Text>DATE JOINED</Text>
          <Image src={Filter} width='30px' height='30px' alt='' />
        </Flex>
      ),
      dataIndex: 'createdAt',
      render: (value) => {
        return <span>{moment(value).format('LLL')}</span>;
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

  const onChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  return (
    <DashboardLayout>
      <Box className='home' bg='#F6F6F6' p='24px 20px 15px'>
        <Box pl='40px' pb='20px' mb='20px'>
          <Text fontSize='24px' fontWeight='500' color='#21357D'>
            USER
          </Text>
          <Box mt='30px'>
            <Stack
              spacing='30px'
              // flexWrap='wrap'
              direction={['column', 'row', 'row']}
            >
              {/* <Wrap spacing={10}> */}
              {userData.map((data, index) => {
                return (
                  <Box
                    className='customerContainer'
                    // border='1px solid blue'
                    key={index}
                    maxWidth={['330px', '180px', '230px']}
                    // maxWidth={isLargerThan480 ? '230px' : '290px'}
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
              {/* </Wrap> */}
            </Stack>
            <Box mt='20px' mb='20px'>
              <Table
                size='small'
                pagination={{
                  size: 'default',
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: false,
                  showLessItems: false,
                  position: ['bottomLeft'],
                  pageSizeOptions: ['10', '50', '100'],
                  // onChange: { onChange },
                }}
                total={10}
                style={{
                  overflow: 'hidden',
                  overflowX: 'scroll',
                  // borderColor: '#fff',
                  // padding: '5px',
                }}
                columns={columns}
                dataSource={data}
                rowSelection={id}
                // components={{
                //   Pagination: (props) => (
                //     <div style={{ float: 'right', padding: '20px' }}>
                //       <Pagination pageSize={10} />
                //     </div>
                //   ),
                // }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <FilterModal isOpen={isOpen} onClose={onClose} />
    </DashboardLayout>
  );
}

const styles = {
  filterBox: {
    border: ' 1px solid #E5EBF0',
    borderRadius: '4px',
    color: '#2D4047',
    paddingLeft: '34px',
    fontSize: '14px',
  },
  title: {
    fontWeight: 'bold',
  },
};

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
