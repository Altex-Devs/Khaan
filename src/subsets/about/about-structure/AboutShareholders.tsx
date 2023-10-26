import { ShareHolders } from '@/assets'
import { Box, flexbox } from '@chakra-ui/react'
import React from 'react'

type Props = {}

export const AboutShareholders =({}: Props) => {
  return (
    <Box backgroundColor={'#F6F6F6'} height={'737px'} width={'100%'}>
        <Box display={'flex'} justifyContent={'center'} paddingTop={'80px'} paddingBottom={"40px"} color={'#3B4856'} fontSize={'24px'} fontWeight={700} textTransform={'uppercase'} fontStyle={"normal"}>КОМПАНИЙН ХУВЬЦАА ЭЗЭМШИГЧИД </Box>
        <Box display={'flex'} justifyContent={"center"}>
            <ShareHolders/>
        </Box>
    </Box>
  )
}