'use client'

import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const option = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

const series = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]


// const options: ApexOptions = {
//     chart: {
//         type: 'area',
//         height: 350,
//         zoom: {
//           enabled: false
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'straight'
//       },

//       title: {
//         text: 'Fundamental Analysis of Stocks',
//         align: 'left'
//       },
//       subtitle: {
//         text: 'Price Movements',
//         align: 'left'
//       },
//       labels,
//       xaxis: {
//         type: 'datetime',
//       },
//       yaxis: {
//         opposite: true
//       },
//       legend: {
//         horizontalAlign: 'left'
//       }
//     // chart: {
//     //     toolbar: {
//     //         show: false,
//     //     },
//     //     zoom: {
//     //         enabled: false,
//     //     },
//     //     foreColor: theme.colors.red[500],
//     // },
//     // grid: {
//     //     show: false,
//     // },
//     // dataLabels: {
//     //     enabled: false,
//     // },
//     // tooltip: {
//     //     enabled: false,
//     // },
//     // xaxis: {
//     //     type: 'datetime',
//     //     axisBorder: {
//     //         color: theme.colors.red[600]
//     //     },
//     //     axisTicks: {
//     //         color: theme.colors.red[600]
//     //     },
//     //     categories: [
//     //         '2023-09-08T00:00:00.000z',
//     //         '2023-09-09T00:00:00.000z',
//     //         '2023-09-10T00:00:00.000z',
//     //         '2023-09-118T00:00:00.000z',
//     //         '2023-09-128T00:00:00.000z',
//     //         '2023-09-13T00:00:00.000z',
//     //     ],
//     // },
// };

export default function Dashboard() {
    return (
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar  />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                <Box
                 p="8"
                 bg="red.800"
                 borderRadius={8}
                 pb="4"   
                >
                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    <Chart type="line" options={option} series={series} height={200} width={500} />
                </Box>
                <Box
                 p="8"
                 bg="red.800"
                 borderRadius={8}
                 pb="4"   
                >
                    <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
            </SimpleGrid>

        </Flex>
      </Flex>
    )
}