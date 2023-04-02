import React from 'react';
// Chakra imports
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLogin, Web3Button } from "@thirdweb-dev/react";


const activeChain = "ethereum";

/*
function App() {
	const { isLoading, login } = useLogin();
  
	return (
	  <button onClick={() => login()}>
		{isLoading ? "Loading..." : "Sign in with Ethereum"}
	  </button>
	);
  }
  
  */


function App() {
	const connectionStatus = useConnectionStatus();
	const router = useRouter();
  
	useEffect(() => {
	  if (connectionStatus === 'connected') {
		router.push('/admin/default');
	  }
	}, [connectionStatus, router]);
  
	if (connectionStatus === 'connecting') return <p>Connecting...</p>;
	if (connectionStatus === "unknown") return <p> Loading... </p>;
	if (connectionStatus === "disconnected")
	return <p> You are not connected to a wallet </p>;

	return null;
}

  
  
export default function SignIn() {
	// Chakra color mode
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorSecondary = 'gray.400';
	const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	const brandStars = useColorModeValue('brand.500', 'brand.400');
	const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
	const googleText = useColorModeValue('navy.700', 'white');
	const googleHover = useColorModeValue({ bg: 'gray.200' }, { bg: 'whiteAlpha.300' });
	const googleActive = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.200' });
	const [ show, setShow ] = React.useState(false);
	const handleClick = () => setShow(!show);
	return (
		
		<DefaultAuthLayout illustrationBackground={'/img/auth/auth.png'}>

			<Flex
				maxW={{ base: '100%', md: 'max-content' }}
				w='100%'
				mx={{ base: 'auto', lg: '0px' }}
				me='auto'
				h='100%'
				alignItems='start'
				justifyContent='center'
				mb={{ base: '30px', md: '60px' }}
				px={{ base: '25px', md: '0px' }}
				mt={{ base: '40px', md: '14vh' }}
				flexDirection='column'>
				<Box me='auto'>
					<Heading color={textColor} fontSize='36px' mb='10px'>
						Sign In
					</Heading>
					<Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
						Connect your Wallet to securely connect
					</Text>
					

				</Box>
				<Flex
					zIndex='2'
					direction='column'
					w={{ base: '100%', md: '420px' }}
					maxW='100%'
					background='transparent'
					borderRadius='15px'
					mx={{ base: 'auto', lg: 'unset' }}
					me='auto'
					mb={{ base: '20px', md: 'auto' }}>
				<ThirdwebProvider activeChain={activeChain}>
					<ConnectWallet/>
					</ThirdwebProvider>
				<Flex align='center' mb='25px'>
				<ThirdwebProvider activeChain={activeChain}>

				<App/>
				</ThirdwebProvider>

				</Flex>

				</Flex>
			</Flex>
		</DefaultAuthLayout>
	);
}
