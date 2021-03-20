import React from 'react'
import { Box, Stack, Button, Text } from '@chakra-ui/react'
import { Layout } from '../components'
import NextLink from 'next/link'

export default function IndexPage() {
  return (
    <Layout>
      <Stack maxW="8xl" width="full" mx="auto" py={[20, 64]} alignItems="center">
        <Box>
          <Text maxW="xxl" textAlign="center" fontSize="5xl" fontWeight="bold">
            Stock Cutting Optimisation App
          </Text>
        </Box>
        <Box>
          <Text maxW="xxl" textAlign="center" fontSize="2xl">
            Created by Engineers for Engineers
          </Text>
        </Box>
        <Box pt="4">
          <NextLink href="/app" passHref>
            <Button bg="gray.900" color="white" size="lg" _hover={{}}>
              try the App
            </Button>
          </NextLink>
        </Box>
      </Stack>
    </Layout>
  )
}