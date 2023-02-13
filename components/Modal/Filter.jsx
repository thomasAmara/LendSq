import React from 'react';
import { DatePicker } from 'antd';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalCloseButton,
  Flex,
  Icon,
  Input,
  Text,
  Wrap,
  Select,
  WrapItem,
} from '@chakra-ui/react';

function Filter({ isOpen, onClose }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalContent
        borderRadius='5px'
        width='100%'
        border='1px solid rgba(33, 63, 125, 0.06)'
        boxShadow='3px 5px 20px rgba(0, 0, 0, 0.04)'
        maxWidth='270px'
        p='15px 10px'
      >
        <ModalBody>
          <Wrap>
            <WrapItem spacing='10px' flexDirection='column'>
              <Box p='0px 5px'>
                <Text fontSize='14px' fontWeight='500'>
                  Organisation
                </Text>
                <Select width='195px' placeholder='Select' marginTop='10px' />
              </Box>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                p='0px 5px'
              >
                <Text>Username</Text>
                <Input width='190px' />
              </Box>
              <Box p='0px 5px'>
                <Text>Email</Text>
                <Input width='190px' />
              </Box>
              <Box p='0px 5px'>
                <Text>Date</Text>
                <DatePicker style={{ width: '190px' }} />
              </Box>
              <Box p='0px 5px'>
                <Text>Phone number</Text>
                <Input width='190px' />
              </Box>
              <Box p='0px 5px'>
                <Text>Status</Text>
                <Input width='190px' />
              </Box>
            </WrapItem>
          </Wrap>
        </ModalBody>
        <ModalFooter>
          <Wrap w='100%' spacing='15px'>
            <Button variant='outline'>Reset</Button>
            <Button bg='#39CDCC' colorScheme='teal'>
              Filter
            </Button>
          </Wrap>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Filter;
