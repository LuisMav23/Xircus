import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  useColorModeValue,
  Progress,
  Heading,
  VStack,
} from "@chakra-ui/react";

import Image from "next/image";

import { Wallet } from "@xircus-web3/components";
import Logo from "../public/Logo.svg";
import medal from "../public/medal.png";
import clock from "../public/clock.png";
import learn from "../public/learn.png";
import discord from "../public/Discord.png";
import badge1 from "../public/badge1.png";
import badge2 from "../public/badge2.png";
import badge3 from "../public/badge3.png";
import projects from "../public/projects.png";

export default function Simple() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={75} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <Image src={Logo} height={75} width={75} />
            <Box
              marginLeft={1}
              fontFamily={"Inter"}
              fontWeight={"black"}
              fontSize={32}
              paddingTop={5}
              paddingBottom={5}
            >
              Block
              <Box as={"span"} color={"#FF9900"}>
                ED
              </Box>
            </Box>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <Button
                background={useColorModeValue("gray.100", "gray.900")}
                fontWeight={"light"}
                fontFamily={"Inter"}
                fontSize={16}
              >
                Home
              </Button>
              <Button
                background={useColorModeValue("gray.100", "gray.900")}
                fontWeight={"light"}
                fontFamily={"Inter"}
                fontSize={16}
              >
                Learn
              </Button>
              <Button
                background={useColorModeValue("gray.100", "gray.900")}
                fontWeight={"light"}
                fontFamily={"Inter"}
                fontSize={16}
              >
                Projects
              </Button>
              <Button
                background={useColorModeValue("gray.100", "gray.900")}
                fontWeight={"light"}
                fontFamily={"Inter"}
                fontSize={16}
              >
                Badges
              </Button>
              <Button
                background={useColorModeValue("gray.100", "gray.900")}
                fontWeight={"light"}
                fontFamily={"Inter"}
                fontSize={16}
              >
                Wallet
              </Button>
            </HStack>
          </Flex>
          <Flex gap={3} alignItems={"center"}>
            <Wallet />
            <Avatar h={10} w={10} />
          </Flex>
        </Flex>
      </Box>
      <Flex
        Flex
        direction={"row"}
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          direction={"column"}
          alignContent={"center"}
          justifyContent={'start'}
          paddingLeft={100}
          paddingTop={50}
        >
          <HStack marginBottom={2.5}>
            <Image src={learn} height={65} width={65} />
            <Box fontFamily={"inter"} fontSize={32} fontWeight={"semibold"}>
              Learn
            </Box>
          </HStack>
          <Flex
            direction={"row"}
            alignContent={"center"}
            justifyContent={"space-between"}
          >
            <Flex
              direction={"column"}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              <Box
                bg={"#ffffff"}
                w={750}
                h={"fit-content"}
                padding={5}
                paddingTop={7}
                borderRadius={15}
                color={"#000000"}
                fontFamily={"Inter"}
              >
                <Flex
                  direction={"column"}
                  alignContent={"center"}
                  justifyContent={"space-between"}
                >
                  <Box
                    fontWeight={"black"}
                    fontStyle={"italic"}
                    fontSize={20}
                    display={"flex"}
                    flexDirection={"row"}
                  >
                    Prepare for Certification
                    <Box marginTop={-4} marginLeft={2}>
                      <Image src={medal} height={60} width={60} />
                    </Box>
                  </Box>
                  <Box
                    marginTop={2.5}
                    marginLeft={5}
                    fontWeight={"regular"}
                    fontSize={16}
                  >
                    You are enrolled in{" "}
                    <Box
                      as={"span"}
                      textDecoration={"underline"}
                      color={"#FF9900"}
                      fontWeight={"black"}
                    >
                      Intro to Solana
                    </Box>{" "}
                    track.
                  </Box>
                  <Heading marginLeft={5} fontSize={28}>
                    Task 3: Deserialize custom account data
                  </Heading>
                  <Flex
                    marginLeft={5}
                    alignContent={"center"}
                    justifyContent={"start"}
                    marginTop={3}
                  >
                    <Progress
                      value={50}
                      colorScheme={"orange"}
                      h={2.5}
                      width={300}
                      rounded={"xl"}
                      borderWidth={1}
                      borderColor={"#000000"}
                      marginTop={3}
                    />
                    <Box color={"gray.700"} marginLeft={2} marginTop={1}>
                      50%
                    </Box>
                    <HStack
                      color={"gray.400"}
                      marginLeft={3}
                      fontSize={12}
                      marginTop={2.5}
                      marginRight={10}
                      w={100}
                      h={"fit-content"}
                    >
                      <Image src={clock} height={10} width={10} />
                      <Box>3 Hours to go</Box>
                    </HStack>
                    <Button bgColor={"#FF9900"} color={"white"}>
                      Keep Making Progress
                    </Button>
                  </Flex>
                  <Flex
                    direction={"row"}
                    alignContent={"center"}
                    justifyContent={"space-between"}
                    marginTop={5}
                  >
                    <Box w={"full"} h={100} paddingTop={15}>
                      <Box marginLeft={5} fontSize={16} fontWeight={"black"}>
                        REVIEW
                      </Box>
                      <Box
                        textAlign={"center"}
                        fontSize={14}
                        fontWeight={"regular"}
                        paddingTop={3}
                      >
                        Lesson to review
                      </Box>
                    </Box>
                    <Box w={"full"} h={100} paddingTop={15}>
                      <Box marginLeft={5} fontSize={16} fontWeight={"black"}>
                        ASSESS
                      </Box>
                      <Box
                        textAlign={"center"}
                        fontSize={14}
                        fontWeight={"regular"}
                        paddingTop={3}
                      >
                        Data Manipulation with Python
                      </Box>
                    </Box>
                    <Box w={"full"} h={100} paddingTop={15}>
                      <Box marginLeft={5} fontSize={16} fontWeight={"black"}>
                        PRACTICE
                      </Box>
                      <Box
                        textAlign={"center"}
                        fontSize={14}
                        fontWeight={"regular"}
                        paddingTop={3}
                      >
                        Intermediate Python
                      </Box>
                    </Box>
                    <Box w={"full"} h={100} paddingTop={15}>
                      <Box marginLeft={5} fontSize={16} fontWeight={"black"}>
                        APPLY
                      </Box>
                      <Box
                        textAlign={"center"}
                        fontSize={14}
                        fontWeight={"regular"}
                        paddingTop={3}
                      >
                        The Android App Market on Google Play
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
              <HStack marginBottom={2.5} marginTop={10}>
                <Image src={projects} height={65} width={65} />
                <Box fontFamily={"inter"} fontSize={32} fontWeight={"semibold"}>
                  Projects
                </Box>

              </HStack>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                bg={"#ffffff"}
                w={750}
                h={"fit-content"}
                padding={5}
                marginBottom={8}
                borderRadius={5}
                color={"#000000"}
                fontFamily={"Inter"}
              >
                <Flex direction={'row'} alignContent={'center'} justifyContent={'space-between'} marginBottom={5}>
                  <Flex direction={'column'} w={500}>
                    <Box textAlign={'start'} fontSize={16} fontWeight={'light'}>
                      Guided Project
                    </Box>
                    <Box textAlign={'start'} fontSize={24} fontWeight={'bold'}>
                      Decentralized Certificate Verification
                    </Box>
                    <Box textAlign={'start'} fontSize={14} fontWeight={'regular'}>
                      Decentralized certificate verification is a process of verifying the authenticity of a certificate using blockchain technology.
                    </Box>
                  </Flex>
                  <Button alignSelf={'center'} bgColor={"#FF9900"} color={"white"}>
                    Start project
                  </Button>
                </Flex>
                <Flex direction={'row'} alignContent={'center'} justifyContent={'space-between'} marginBottom={5}>
                  <Flex direction={'column'} w={500}>
                    <Box textAlign={'start'} fontSize={16} fontWeight={'light'}>
                      Guided Project
                    </Box>
                    <Box textAlign={'start'} fontSize={24} fontWeight={'bold'}>
                    DAO-Based Content Curation
                    </Box>
                    <Box textAlign={'start'} fontSize={14} fontWeight={'regular'}>
                    DAO-based content curation is a method of content curation that relies on a decentralized autonomous organization (DAO) to manage and curate content.
                    </Box>
                  </Flex>
                  <Button alignSelf={'center'} bgColor={"#FF9900"} color={"white"}>
                    Start project
                  </Button>
                </Flex>
                <Flex direction={'row'} alignContent={'center'} justifyContent={'space-between'} marginBottom={5}>
                  <Flex direction={'column'} w={500}>
                    <Box textAlign={'start'} fontSize={16} fontWeight={'light'}>
                      Guided Project
                    </Box>
                    <Box textAlign={'start'} fontSize={24} fontWeight={'bold'}>
                    Smart Contract-Based Credential Verification
                    </Box>
                    <Box textAlign={'start'} fontSize={14} fontWeight={'regular'}>
                    Smart contract-based credential verification is a process of verifying credentials using smart contracts on a blockchain network. 
                    </Box>
                  </Flex>
                  <Button alignSelf={'center'} bgColor={"#FF9900"} color={"white"}>
                    Start project
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          direction={"column"}
          alignContent={"center"}
          justifyContent={"start"}
          paddingRight={100}
          paddingTop={75}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            bg={"#ffffff"}
            w={600}
            h={"fit-content"}
            padding={5}
            marginBottom={8}
            borderRadius={5}
            color={"#000000"}
            fontFamily={"Inter"}
          >
            <HStack>
              <Image src={discord} height={60} width={60} />
              <VStack paddingLeft={5}>
                <Box alignSelf={"start"} fontWeight={"bold"} fontSize={18}>
                  Discord
                </Box>
                <Box alignSelf={"start"} fontSize={16}>
                  Connect for future community features!
                </Box>
              </VStack>
              <Box paddingLeft={5}>
                <Button bgColor={"#FF9900"} color={"white"}>
                  Connect
                </Button>
              </Box>
            </HStack>
          </Box>

          <Box
            bg={"#ffffff"}
            w={600}
            h={"fit-content"}
            padding={7}
            paddingTop={7}
            borderRadius={15}
            color={"#000000"}
            fontFamily={"Inter"}
          >
            <Flex
              direction={"column"}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              <Flex direction={"row"}>
                <Avatar h={75} w={75} />
                <Flex direction={"column"} paddingTop={2}>
                  <Box marginLeft={8} fontWeight={"black"} fontSize={24}>
                    Hey,
                    <Box as={"span"} color={"#FF9900"}>
                      {" "}
                      Earl John
                    </Box>
                  </Box>
                  <Box marginLeft={8} fontWeight={"medium"} fontSize={16}>
                    Web3 Developer
                  </Box>
                </Flex>
              </Flex>
              <Flex
                direction={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
                marginTop={5}
              >
                <Box w={"full"} h={100} paddingTop={15}>
                  <Box marginLeft={7} fontSize={18} fontWeight={"regular"} color={"gray.500"}>
                    Daily EXP
                  </Box>
                  <Box
                    marginLeft={7}
                    fontSize={36}
                    fontWeight={"bold"}
                    paddingTop={3}
                  >
                    0/250
                  </Box>
                </Box>
                <Box w={"full"} h={100} paddingTop={15}>
                  <Box marginLeft={7} fontSize={18} fontWeight={"regular"} color={"gray.500"}>
                    Total EXP
                  </Box>
                  <Box
                    marginLeft={7}
                    fontSize={36}
                    fontWeight={"bold"}
                    paddingTop={3}
                  >
                    52343
                  </Box>
                </Box>
              </Flex>
              <Box marginLeft={7} fontSize={18} fontWeight={"regular"} color={"gray.500"} marginTop={5}>
                Current Streak
              </Box>
              <Box
                marginLeft={7}
                fontSize={32}
                fontWeight={"bold"}
                paddingTop={3}
              >
                3 Days
              </Box>
            </Flex>
            <Flex
              direction={"row"}
              alignContent={"center"}
              justifyContent={"space-between"}
              marginTop={3}
            >
              <Box w={"full"} h={100} paddingTop={15}>
                <Box fontSize={24} fontWeight={"bold"} textAlign={"center"}>
                  5
                </Box>
                <Box
                  color={"gray.500"}
                  fontSize={18}
                  textAlign={"center"}
                  fontWeight={"regular"}
                  paddingTop={3}
                >
                  Course<br />Completed
                </Box>
              </Box>
              <Box w={"full"} h={100} paddingTop={15}>
                <Box fontSize={24} fontWeight={"bold"} textAlign={"center"}>
                  1
                </Box>
                <Box
                  color={"gray.500"}
                  fontSize={18}
                  textAlign={"center"}
                  fontWeight={"regular"}
                  paddingTop={3}
                >
                  Tracks<br />Completed
                </Box>
              </Box>
              <Box w={"full"} h={100} paddingTop={15}>
                <Box fontSize={24} fontWeight={"bold"} textAlign={"center"}>
                  2
                </Box>
                <Box
                  color={"gray.500"}
                  fontSize={18}
                  textAlign={"center"}
                  fontWeight={"regular"}
                  paddingTop={3}
                >
                  Projects<br />Completed
                </Box>
              </Box>
            </Flex>
            <Box marginLeft={7} marginTop={10} fontSize={28} fontWeight={"black"}>
              Badges
            </Box>
            <Flex
              direction={"row"}
              alignContent={"center"}
              justifyContent={"space-between"}
              marginTop={3}
            >
              <Box w={"full"} h={100} paddingLeft={10} paddingRight={10}>
                <Image src={badge1} height={100} width={100} />
              </Box>
              <Box w={"full"} h={100} paddingLeft={10} paddingRight={10}>
                <Image src={badge2} height={100} width={100} />
              </Box>
              <Box w={"full"} h={100} paddingLeft={10} paddingRight={10}>
                <Image src={badge3} height={100} width={100} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
