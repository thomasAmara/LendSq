import React from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Wrap,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  WrapItem,
  useMediaQuery,
  useDisclosure,
  useToast,
  HStack,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';
import DashboardLayout from './dashboardLayout';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
// import Back from '../public/images/previewArrow.svg';

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
                // leftIcon={
                //   <MdKeyboardBackspace size='34px' ml='-50px' color='#545F7D' />
                // }
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
              </Box>{' '}
            </Box>
          </Box>
          <Box className='midContainer'>
            <Stack direction='row'>
              <Box>Grace Effiom</Box>
              <Box>User Tier</Box>
              <Box>N 200,000.00</Box>
            </Stack>
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
                    <Text>{customerInfo.profile.phoneNumber}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Email Address</Text>
                    {customerInfo.email}
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>BVN</Text>
                    <Text>{customerInfo.profile.bvn}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Gender</Text>
                    <Text>{customerInfo.profile.gender}</Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='57%'
                  mt='20px'
                  spacing='24px'
                  mb='10px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>Marital Status</Text>
                    <Text>Marital Status</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Children</Text>
                    <Text></Text>
                  </Box>
                  <Box w='full' display='flex' flexDirection='column'>
                    <Text className='textHeading'>Type of Residence</Text>
                    <Text>Parent Apartment</Text>
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
                    <Text>{customerInfo.education.level}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Employment Status</Text>
                    <Text>{customerInfo.education.employmentStatus}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Sector of Employment</Text>
                    <Text>{customerInfo.education.sector}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Duration of Employment</Text>
                    <Text>{customerInfo.education.duration}</Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack
                  direction={['column', 'row']}
                  w='75%'
                  mb='10px'
                  mt='20px'
                >
                  <Box w='full'>
                    <Text className='textHeading'>Office Email</Text>
                    <Text>{customerInfo.education.officeEmail}</Text>
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
                      <Text>{customerInfo.education.monthlyIncome[0]}</Text>
                      <Text>{customerInfo.education.monthlyIncome[1]}</Text>
                    </Box>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Loan Repayment</Text>
                    <Text>{customerInfo.education.loanRepayment}</Text>
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
                <Stack direction={['column', 'row']} mt='20px'>
                  <Box w='full'>
                    <Text className='textHeading'>TWITTER</Text>
                    <Text>{customerInfo.socials.twitter}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>FACEBOOk</Text>
                    <Text>{customerInfo.socials.facebook}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>INSTAGRAM</Text>
                    <Text>{customerInfo.socials.instagram}</Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Box borderBottom='1px solid #213F7D'>
              <Text mt='20px' color='#213F7D' fontWeight='500' fontSize='16px'>
                Gurantor
              </Text>
              <Box>
                <Stack direction={['column', 'row']} mt='20px'>
                  <Box w='full'>
                    <Text className='textHeading'>Full Name</Text>
                    <Text>
                      {customerInfo.guarantor.firstName}{' '}
                      {customerInfo.guarantor.lastName}
                    </Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Phone Number</Text>
                    <Text>{customerInfo.guarantor.phoneNumber}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Email Address</Text>
                    <Text>{customerInfo.guarantor.address}</Text>
                  </Box>
                  <Box w='full'>
                    <Text className='textHeading'>Relationship</Text>
                    <Text>{customerInfo.guarantor.gender}</Text>
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
