

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdCode,
  MdFileCopy,
  MdPrivacyTip,
  MdVerified
} from 'react-icons/md'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  columnsDataCheck,
  columnsDataComplex,
  TableData
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'
import GeneralInformation from 'views/admin/profile/components/General'
import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";
const activeChain = "ethereum";
import { AddressStats, assembleAddressStatistics } from 'api/services/address.service'

function Wallet_Stats() { 
  assembleAddressStatistics("0x6209737b234EB4A730c4619C457E6c139fE75839").then(async(res) => { 
    return res;
  });
}


function App() {
	const connectionStatus = useConnectionStatus();
	const router = useRouter();
  	useEffect(() => {
	  if (connectionStatus === 'disconnected' ) {
		router.push('/auth/sign-in');
	  }
	}, [connectionStatus, router]);
  return null; 
  }
  
  
export default function UserReports () {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      				<ThirdwebProvider activeChain={activeChain}>

<App/>
</ThirdwebProvider>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Balance Sent'
              value="17.5ETH"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Balance Recieved'
              value='34.3ETH'
            />
            <MiniStatistics growth='+23%' name='Balance' value='16.8ETH' />
            <MiniStatistics
              endContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdPrivacyTip}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Scam Tokens'
              value='27'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdCode}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Contract Address'
              value='False'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={MdVerified}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Verified'
              value='True'
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
            <TotalSpent />
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={(tableDataComplex as unknown) as TableData[]}
            />

          </SimpleGrid>
        
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <GeneralInformation />
              <PieCard />
            </SimpleGrid>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  )
}
