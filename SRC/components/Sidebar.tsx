import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine,RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="red.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignContent="center" color="green.400" py="1">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="mediun">Dashboard</Text>
                        </Link>
                        <Link display="flex" alignContent="center" color="green.400" py="1">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="mediun">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="red.400" fontSize="small">Automação</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" alignContent="center" color="green.400" py="1">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="mediun">Formulários</Text>
                        </Link>
                        <Link display="flex" alignContent="center" color="green.400" py="1">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="mediun">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}