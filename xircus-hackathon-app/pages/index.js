import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Container, Flex, VStack, Box, Button } from '@chakra-ui/react'
import { ChangeNetwork, ConnectModal, DisconnectButton, Wallet } from "@xircus-web3/components"

import Logo from "../public/withtagline.png";

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/homepage')
  }

  return (
    <>
      <Head>
        <title>Xircus | with Components</title>
        <meta name="description" content="Template created by Xircus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <Container>
        <VStack h="100vh" justify="center">
        <Flex>
            <Image src={Logo} height={1400} width={930} />
          </Flex>
          <ConnectModal>
            <Wallet />
            <ChangeNetwork maxW="300px" />
            <DisconnectButton>Disconnect</DisconnectButton>
            <Button onClick={handleClick}>
              Go to Home Page
            </Button>
          </ConnectModal>      
        </VStack>
      </Container>
    </>
  )
}
