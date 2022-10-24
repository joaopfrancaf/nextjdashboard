import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../componets/header/index";
import { Sidebar } from "../componets/sidebar/index";
//import Chart from 'react-apexcharts'
import dynamic from "next/dynamic"; //essa importação serve para funcionar apenas no lado do cliente (a bibli dos graficos funciona apenas no lado do cliente, não pelo server do nextjs)

const Chart = dynamic (() => import('react-apexcharts'), {
    ssr:false
})

const options = {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        forceColor: theme.colors.gray[500],

    grid: {
        show:false
    },
    dataLabels: {
        enabled: false,
    },
   

        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTricks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-03-11T00:00:00.000Z',
            '2022-03-12T00:00:00.000Z',
            '2022-03-13T00:00:00.000Z',
            '2022-03-14T00:00:00.000Z',
            '2022-03-15T00:00:00.000Z',
            '2022-03-16T00:00:00.000Z',
            '2022-03-17T00:00:00.000Z',
        ]
    
}

const series = [{ 
    name: 'series1',
    data: [123,2323,12,1]    
}]

export default function Dashboard () {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="1" minChildWidth="320px">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"

                        >
                        <Text fontSize="lg" mb="4">Inscrito da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>                    
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"

                        >
                        <Text fontSize="lg" mb="4">taxa de abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    ) 
}