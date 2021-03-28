import React from "react";
import { Box, Stack, Button, Text, Image } from "@chakra-ui/react";
import { Layout } from "../components";
import NextLink from "next/link";

export default function IndexPage() {
  return (
    <Layout>
      <Stack
        maxW="8xl"
        width="full"
        mx="auto"
        pt={[20, 48]}
        pb="10"
        alignItems="center"
      >
        <Box>
          <Text maxW="xxl" textAlign="center" fontSize="5xl" fontWeight="bold">
            Stock Cutting Optimisation App
          </Text>
        </Box>
        <Box>
          <Text maxW="xxl" textAlign="center" fontSize="2xl">
            Created for Engineers by Engineers
          </Text>
        </Box>
        <Box pt="4">
          <NextLink href="/app" passHref>
            <Button bg="gray.900" color="white" size="lg" _hover={{}}>
              The App
            </Button>
          </NextLink>
        </Box>
      </Stack>
      <Stack alignItems="center">
        <Image src="/app-ui.png" objectFit="cover" maxW="1000px" />
      </Stack>
    </Layout>
  );
}
