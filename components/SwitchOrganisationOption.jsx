import { Select, Image, Box } from '@chakra-ui/react';

const Index = ({ text, isIcon, styles }) => {
  return (
    <Box position='relative' p='0px 7px'>
      {isIcon !== true && (
        <Image
          src='/images/briefcase.png'
          //   src='/public/images/briefcase.png'
          //   width='136px'
          //   height='37px'
          cursor='pointer'
          alt='logo'
          position='absolute'
          //   right='6.7rem'
          top='.8rem'
        />
      )}
      <Select
        placeholder='Switch Organisation'
        width='fit-content'
        cursor='pointer'
        style={styles}
        value='option1'
        _selected={{ border: 'none' }}
        _hover={{ borderColor: 'none' }}
      >
        <option value='option1'> {text ? text : 'EN'} </option>
      </Select>
    </Box>
  );
};

export default Index;
