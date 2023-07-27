import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react"

import Settings from "./Settings"

const Nav = () => {
  const currentYear = new Date().getFullYear()
  const color = useColorModeValue("gray.800", "gray.400")
  const backgroudColor = useColorModeValue(["white", "gray.50"], ["gray.900"])

  return (
    <Flex
      as="nav"
      position="relative"
      direction="column"
      justifyContent="center"
      alignItems="center"
      py={4}
      backgroundColor={backgroudColor}
      borderTopRadius={[20, 0]}
    >
      <Flex as="p" color={color} mt={2} alignItems="center">
        &copy; {currentYear} Abhishek Kumar. All rights reserved. | Powered by
        KMaar Miscellaneous Studio <Settings />
      </Flex>
    </Flex>
  )
}

export default Nav
