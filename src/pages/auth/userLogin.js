/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Button,
  Text,
  Box,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

import User from '../../../mockData/mockData';
import CustomInput from 'components/CustomeInput';

function UserLogin() {
  const [show, setShow] = React.useState(false);

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email('Email is required'),
    password: Yup.string().required('password is required'),
  });

  const handleClick = () => setShow(!show);

  const onSubmit = (values) => {
    const user = User.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      router.push('/dashboard');
    } else {
      alert('Login Fail');
    }
    // values.email === 'thomas@xyz.com'
    //   ? router.push('/dashboard')
    //   : router.push('/');
    // if (values.email === 'thomas@xyz.com') {
    //   router.push('/dashboard');
    // }
  };
  return (
    <Box
      className='authContainer'
      display='flex'
      justifyContent='center'
      margin='0 auto'
      p='20px'
      flexDirection='row'
      height='100vh'
      width='100%'
    >
      <Box className='leftContainer' height='90%' w='50%'>
        <Box className='logoContainer'></Box>
        <Box className='imageContainer'></Box>
      </Box>
      <Box className='loginContainer' height='90%'>
        <Box mt='30px'>
          <Text
            color='#213F7D'
            fontFamily='sans-serif'
            fontWeight='700'
            fontSize='40px'
          >
            Welcome !
          </Text>
          <Text>Enter details to Login</Text>
        </Box>

        <Box mt='25px' display='flex' flexDirection='column'>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleChange, error, values }) => (
              <Form>
                <Box>
                  {/* <CustomInput
                    label='Email Address'
                    styles={{ border: '1px solid #EBE9F1' }}
                    background='#F6F3F2'
                    placeholder='Enter email'
                    name='email'
                  /> */}
                  <Input
                    maxWidth='450px'
                    borderRadius='5px'
                    background='#FFF'
                    value={values.email}
                    onChange={handleChange}
                    width='100%'
                    h='50px'
                    name='email'
                    placeholder='Email'
                  />
                </Box>

                <Box mt='20px'>
                  <InputGroup w='100%' maxW='450px'>
                    <Input
                      width='100%'
                      borderRadius='5px'
                      background='#FFF'
                      value={values.password}
                      onChange={handleChange}
                      maxWidth='450px'
                      h='50px'
                      name='password'
                      placeholder='Password'
                      type={show ? 'password' : 'text'}
                    />
                    <InputRightElement mt='5px' ml='-15px' width='3.5rem'>
                      <Box cursor='pointer' onClick={handleClick}>
                        <Text fontSize='12' fontWeight='600' color='#39CDCC'>
                          SHOW
                        </Text>
                      </Box>

                      {/* <Icon as={show} /> */}
                      {/* <Icon
                        as={show ? FiEyeOff : FiEye}
                        onClick={handleClick}
                      /> */}
                    </InputRightElement>
                  </InputGroup>
                </Box>

                <Box mt='10px'>
                  <Text
                    textTransform='uppercase'
                    fontWeight='600'
                    fontSize='12px'
                    color='#39CDCC'
                  >
                    Forgot Password?
                  </Text>
                </Box>

                <Button
                  backgroundColor='#39CDCC'
                  h='48px'
                  borderRadius='8px'
                  maxWidth='450px'
                  w='100%'
                  cursor='pointer'
                  color='#FFF'
                  mt='20px'
                  type='submit'
                  disabled={!values.email || !values.password}
                  _hover={{ backgroundColor: '#28908F' }}
                >
                  <Text textTransform='capitalize'>Log in</Text>
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}
export default UserLogin;
