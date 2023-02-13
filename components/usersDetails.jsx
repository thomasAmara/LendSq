import React from 'react';
import {
  Box,
  Text,
  Wrap,
  Button,
  Input,
  useToast,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Link from 'next/link';
import DashboardLayout from './dashboardLayout';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { formatter } from '../components/Formatter';
import StarRatings from 'react-star-ratings';
import Avatar from '../public/images/profileAvatar.svg';

function UsersDetails() {
  const { customerInfo } = useSelector((state) => state.customerReducer);

  return (
    <DashboardLayout>
      <Box className='profileContainer' p='10px 20px'>
        <Box className='detailsContainer'>
          <Box className='topContainer'>
            <Box className='buttonContainer'>
              <Button
                backgroundColor='#E5E5E5'
                justifyContent='space-between'
                color='#545F7D'
                borderRadius='5px'
                _hover={{ bg: '#ebedf0' }}
                leftIcon={
                  <MdKeyboardBackspace size='34px' ml='-50px' color='#545F7D' />
                }
                // leftIcon={<Back />}
              >
                <Link href='/dashboard'>Back to User</Link>
              </Button>
            </Box>
            <Box className='userInfoContainer'>
              <Box>
                <Text fontWeight='500' fontSize='24px' color='#213F7D'>
                  USERS DETAILS
                </Text>
              </Box>
              <Box className='buttons' d='flex' justifyContent='space-between'>
                <Button color='#E4033B' colorScheme='red' variant='outline'>
                  BLACKLIST USER
                </Button>
                <Button
                  //   borderColor='#39CDCC'
                  //   border='2px'
                  borderRadius='8px'
                  colorScheme='cyan'
                  variant='outline'
                >
                  ACTIVATE USER
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className='midContainer'>
            <Stack direction='row' spacing='30px'>
              <Box
                display='flex'
                flexDirection='row'
                w='35%'
                justifyContent='space-between'
              >
                <Box
                  bg='#AAAFBE'
                  w='100px'
                  height='100px'
                  cursor='pointer'
                  borderRadius='50%'
                  display='flex'
                  justifyContent='center'
                >
                  <Image
                    width={50}
                    height={50}
                    alignSelf='center'
                    //src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg'
                    // src={`${customerInfo.profile.avatar}`}
                    src={Avatar}
                    alt='userProfile'
                  />
                  {console.log('ioio', `${customerInfo.profile.avatar}`)}
                </Box>
                <Box display='flex' flexDirection='column' alignSelf='center'>
                  <Box display='flex'>
                    <Text color='#213F7D' fontSize='22px' fontWeight='500'>
                      {customerInfo.profile.firstName}
                    </Text>
                    <Text
                      ml='10px'
                      color='#213F7D'
                      fontSize='22px'
                      fontWeight='500'
                    >
                      {customerInfo.profile.lastName}
                    </Text>
                  </Box>

                  <Box>
                    <Text color='#545F7D' fontSize='14px' fontWeight='400'>
                      LSQFf87g90
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                display='flex'
                flexDirection='column'
                borderLeft='1px solid #545F7D'
                alignSelf='center'
                pl='15px'
              >
                <Text
                  color='#545F7D'
                  fontSize='14px'
                  lineHeight='16px'
                  fontWeight='500'
                >
                  User Tier
                </Text>
                <Box>
                  <StarRatings
                    rating={1}
                    numberOfStars={3}
                    borderColor='#E9B200'
                    starDimension='25px'
                    starRatedColor='#E9B200'
                    starEmptyColor='#A9A9A9'
                    name='rating'
                  />
                </Box>
              </Box>
              <Box
                display='flex'
                borderLeft='1px solid #545F7D'
                alignSelf='center'
                pl='15px'
              >
                <Text color='#213F7D' fontSize='22px' fontWeight='500'>
                  {formatter.format(200000)}
                </Text>
              </Box>
            </Stack>
            <Box mb='0px'>
              <Tabs spacing={20} mb='-10px'>
                <TabList style={{ border: 'none' }}>
                  <Tab selected={{ color: 'white', bg: '#39CDCC' }}>
                    General Details
                  </Tab>
                  <Tab selected={{ color: 'white', bg: '#39CDCC' }}>
                    Documents
                  </Tab>
                  <Tab selected={{ color: 'white', bg: '#39CDCC' }}>
                    Bank Details
                  </Tab>
                  <Tab>Loans</Tab>
                  <Tab>Savings</Tab>
                  <Tab>App and System</Tab>
                </TabList>
              </Tabs>
            </Box>
          </Box>
          <Box className='bottomContainer'>
            <Box borderBottom='1px solid #213F7D' borderBottomColor='#213f7d'>
              <Box>
                <Text
                  mt='20px'
                  color='#213F7D'
                  fontWeight='500'
                  fontSize='16px'
                >
                  Personal Information
                </Text>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='full'
                  mt='20px'
                  spacing='24px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>Full Name</Text>
                    <Text className='textInfo'>{customerInfo.userName}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Phone Number</Text>
                    <Text className='textInfo'>
                      {customerInfo.profile.phoneNumber}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Email Address</Text>
                    <Text className='textInfo'> {customerInfo.email}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>BVN</Text>
                    <Text className='textInfo'>{customerInfo.profile.bvn}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Gender</Text>
                    <Text className='textInfo'>
                      {customerInfo.profile.gender}
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='55%'
                  mt='20px'
                  spacing='24px'
                  mb='20px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>Marital Status</Text>
                    <Text className='textInfo'>Marital Status</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Children</Text>
                    <Text className='textInfo'>None</Text>
                  </Box>
                  <Box w='full' display='flex' flexDirection='column'>
                    <Text className='textHeading'>Type of Residence</Text>
                    <Text className='textInfo'>Parent Apartment</Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box borderBottom='1px solid #213F7D'>
              <Box>
                <Text
                  mt='20px'
                  color='#213F7D'
                  fontWeight='500'
                  fontSize='16px'
                >
                  Education and Employment{' '}
                </Text>
              </Box>
              <Box>
                <Stack direction={['column', 'row']} mt='20px'>
                  <Box w='full'>
                    <Text className='textHeading'>Level of Education</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.level}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Employment Status</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.employmentStatus}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Sector of Employment</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.sector}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Duration of Employment</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.duration}
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='75%'
                  mb='20px'
                  mt='20px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>Office Email</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.officeEmail}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Monthly Income</Text>
                    <Box
                      //   w='full'
                      w='50%'
                      display='flex'
                      flexDirection='row'
                      justifyContent='space-between'
                    >
                      <Text className='textInfo'>
                        {formatter.format(
                          customerInfo.education.monthlyIncome[0]
                        )}
                      </Text>

                      <Text ml='4px' className='textInfo'>
                        {formatter
                          .format(customerInfo.education.monthlyIncome[1])
                          .toLocaleString()}
                      </Text>
                    </Box>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Loan Repayment</Text>
                    <Text className='textInfo'>
                      {customerInfo.education.loanRepayment}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box borderBottom='1px solid #213F7D'>
              <Box>
                <Text
                  mt='20px'
                  color='#213F7D'
                  fontWeight='500'
                  fontSize='16px'
                >
                  Socials
                </Text>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='70%'
                  mb='20px'
                  mt='20px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>TWITTER</Text>
                    <Text className='textInfo'>
                      {customerInfo.socials.twitter}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>FACEBOOk</Text>
                    <Text className='textInfo'>
                      {customerInfo.socials.facebook}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>INSTAGRAM</Text>
                    <Text className='textInfo'>
                      {customerInfo.socials.instagram}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box borderBottom='1px solid #213F7D'>
              <Text mt='20px' color='#213F7D' fontWeight='500' fontSize='16px'>
                Gurantor
              </Text>
              <Box>
                <Stack direction={['column', 'row']} mb='20px' mt='20px'>
                  <Box w='full'>
                    <Text className='textHeading'>Full Name</Text>
                    <Text className='textInfo'>
                      {customerInfo.guarantor.firstName}{' '}
                      {customerInfo.guarantor.lastName}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Phone Number</Text>
                    <Text className='textInfo'>
                      {customerInfo.guarantor.phoneNumber}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Email Address</Text>
                    <Text className='textInfo'>
                      {customerInfo.guarantor.address}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Relationship</Text>
                    <Text className='textInfo'>
                      {customerInfo.guarantor.gender}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box>
              <Stack></Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
export default UsersDetails;
