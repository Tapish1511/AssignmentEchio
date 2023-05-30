import React from "react"
import { HStack, useRadio, Box,  useRadioGroup} from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (
        <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='full'
          boxShadow='md'
          bgColor='white'
          _checked={{
            bgColor:'blue.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={2}
          py={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function RadioComponent({values, Name, displayName}) {
    const options = values

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: Name,
    defaultValue:values[0],
    onChange: ()=>{},
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value, index) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {displayName[index]}
          </RadioCard>
        )
      })}
    </HStack>
    )
  }
  
export default RadioComponent;