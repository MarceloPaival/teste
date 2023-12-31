import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text 
            fontSize="3xl" 
            fontWeight="bold" 
            letterSpacing="tight"
            w="64">

                Projeto integrador
                <Text as="span" ml="1" color="red.500" >2</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={480}
                alignSelf="center"
                color="red.200"
                position="relative"
                bg="red.800"
                borderRadius="full"
            >
                <Input
                    color="red.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar"
                    _placeholder={{ color: 'red.400' }}
                />
                <Icon as={RiSearchLine} fontSize="20" />
         </Flex>
         
         
         <Flex
              align="center"
              ml="auto"
            ></Flex>
              <HStack 
                spacing="4"
                mx="8"
                pr="8"
                py="1"
                color="red.300"
                borderRightWidth={1}
                borderColor="red.700"
              >
                <Icon as={RiNotificationLine} fontSize="28" />
                <Icon as={RiUserAddLine} fontSize="28" />
              </HStack>

              <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Marcelo Paiva</Text>
                    <Text color="red.300" fontSize="small">paiva-lopes@hotmail.com</Text>
                </Box>
                    <Avatar size="md" name="Marcelo Paiva" src="https://github.com/MarceloPaival.png" />


            </Flex>
        </Flex>
    );
}