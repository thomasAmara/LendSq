import { ErrorMessage, useField } from 'formik';
import { Box } from '@chakra-ui/react';
import { errorMessage } from '../src/styles/commonStyles';

const CustomInput = ({
  label,
  LeftElement,
  RightElement,
  setFieldValue,
  maxLength,
  styles,
  leftElementStyles,
  padding,
  ...props
}) => {
  const [field] = useField(props);
  const isNumber = (e) => {
    if (e.target.value.length <= (maxLength ? parseInt(maxLength) : 100)) {
      setFieldValue(field.name, e.target.value);
    }
  };
  return (
    <>
      {/* For number input  */}
      {setFieldValue ? (
        <Box width='100%'>
          {label && (
            <Box as='label' fontSize='14px' mb='3px' htmlFor='text'>
              {label}
            </Box>
          )}
          <Box className='input-icons'>
            {LeftElement && (
              <Box className='icon m-auto' style={{ ...leftElementStyles }}>
                {LeftElement}
              </Box>
            )}
            <input
              className='input-field'
              {...field}
              {...props}
              autoComplete='true'
              type='number'
              onChange={(e) => {
                isNumber(e);
              }}
              style={{
                ...styles,
                background: props.disabled && '#fff',
                padding:
                  LeftElement || padding
                    ? padding || '12px 1rem 12px 2.5rem'
                    : '12px 1rem 12px 16px',
              }}
            />
          </Box>

          <ErrorMessage
            component='div'
            name={field.name}
            style={errorMessage}
          />
        </Box>
      ) : (
        <Box width='100%'>
          {label && (
            <Box as='label' fontSize='14px' mb='3px' htmlFor='text'>
              {label}
            </Box>
          )}
          <Box className='input-icons'>
            {LeftElement && <Box className='icon m-auto'>{LeftElement}</Box>}
            <input
              className='input-field'
              {...field}
              {...props}
              autoComplete='true'
              style={{
                ...styles,
                background: props.disabled && '#fff',
                padding:
                  LeftElement || padding
                    ? padding || '12px 1rem 12px 2.5rem'
                    : '12px 1rem 12px 16px',
              }}
            />
          </Box>

          <ErrorMessage
            component='div'
            name={field.name}
            style={errorMessage}
          />
        </Box>
      )}
    </>
  );
};

export default CustomInput;
