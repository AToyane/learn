import React, { useEffect, useState } from "react";
import Alert from "./Alert.js";
import Tabs from "./Tabs.js";
import TableCard from "./TableCard.js";
import { OfficeBuildingIcon, ReceiptTaxIcon } from "@heroicons/react/outline";

function MyApp() {
    const [show, setShow] = useState(null);
    useEffect(() => {
        var yLabels = {
            0: "$0",
            6: "$6K",
            10: "$10K",
            14: "$15K",
            20: "$20K",
            40: "$40K",
        };

        {/*var line_chart = new Chart(document.getElementById("line_chart"), {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
                datasets: [
                    {
                        data: [6, 8, 20, 18, 10, 10, 16, 16, 19, 16, 14, 10],

                        borderColor: "#F0ABFC",
                        fill: false,
                    },
                    {
                        data: [10, 12, 6, 17, 18, 8, 19, 14, 12, 10, 8, 6],
                        borderColor: "#FDBA74",
                        fill: false,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value, index, values) {
                                    return yLabels[value];
                                },
                            },
                        },
                    ],
                },
            },
        });*/}
    });
    return (
        <div className="px-4 xl:px-0 bg-gray-50">
            <div className="mx-auto container">
                <div className="xl:flex">
                    <div className="xl:w-3/4 2xl:w-4/5 mt-4">
                        <Alert/>
                        <Tabs/>
                        <TableCard/>
                        <div className="mt-4 pl-4 md:pl-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg shadow">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Overview</p>
                        </div>
                        <div className="bg-white shadow-lg pb-8 px-4 md:px-8 xl:px-10">
                            <div className="py-4 sm:py-6 md:py-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:px-10 border-gray-100 border-b pb-8 gap-y-8 gap-x-12 2xl:gap-x-0">
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Sales</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">89.5%</p>
                                        <div className="flex flex-col md:w-48 w-full lg:w-64">
                                            <div className="w-full flex justify-end">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p className=" text-xs leading-none text-green-600">4.3%</p>
                                                </div>
                                            </div>
                                            <div className="mt-2.5">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-1/2 h-1 bg-blue-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">revenue</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">$75,000</p>
                                        <div className="flex flex-col">
                                            <div className="h-4"></div>
                                            <div className="lg:w-64 md:w-48 w-fill mt-2.5">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-40 h-1 bg-lime-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">customers</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">3922</p>
                                        <div className="flex flex-col md:w-48 w-full lg:w-64">
                                            <div className="w-full flex justify-end">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p className=" text-xs leading-none text-green-600">9.1%</p>
                                                </div>
                                            </div>
                                            <div className="mt-2.5 ">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-44 h-1 bg-yellow-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex justify-between w-full items-center">
                                <div className="py-3 md:px-4 flex items-center bg-gray-50 rounded-xl">
                                    <p className="text-xs font-medium leading-none text-center text-gray-500">Show:</p>
                                    <div className="px-2 sm:px-3.5 border-r border-gray-300">
                                        <p className="text-xs leading-none text-gray-800">Hour</p>
                                    </div>
                                    <div className="px-2 sm:px-3.5 border-r border-gray-300">
                                        <p className="text-xs leading-none text-gray-800">Day</p>
                                    </div>
                                    <div className="px-2 sm:px-3.5 border-r border-gray-300">
                                        <p className="text-xs leading-none text-gray-800">Week</p>
                                    </div>
                                    <div className="px-2 sm:px-3.5 border-r border-gray-300">
                                        <p className="text-xs leading-none text-gray-800">Month</p>
                                    </div>
                                    <div className="px-2 sm:px-3.5">
                                        <p className="text-xs font-bold leading-none text-indigo-700">Year</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 lg:mt-0">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-pink-300 rounded-full" />
                                        <p className="text-xs leading-none ml-1.5">Components</p>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <div className="w-4 h-4 bg-orange rounded-full" />
                                        <p className="text-xs leading-none ml-1.5">Templates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <canvas id="line_chart" height="30px" width="100%" />
                            </div>
                            <div className="mt-5 md:mt-10 border rounded-lg border-gray-100">
                                <div className="py-4 md:py-6 pl-4 md:pl-6">
                                    <p className="text-base md:text-lg lg:text-xl font-bold leading-tight text-gray-800">Orders</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <thead>
                                            <tr className="bg-gray-50 h-16 w-full text-sm leading-none text-gray-800">
                                                <th className="font-normal text-left pl-8">Date</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0 ">Product</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0 ">Amount</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0 ">Customer</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0 ">Order #</th>
                                                <th className="font-normal text-left px-10 lg:px-6 xl:px-0 ">Status</th>
                                                <th className="font-normal text-left ">Confirmation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full">
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">06/02/2020</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Samantha Smith
                                                    <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <div className="flex items-center justify-center w-20 h-6  bg-yellow-100 rounded-full">
                                                        <p className="text-xs leading-3 text-yellow-600">Pending</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded xl:mr-0 mr-4">
                                                        <p className="text-sm leading-none text-indigo-700">Confirm Order</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">06/02/2020</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Samantha Smith
                                                    <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <div className="flex items-center justify-center w-20 h-6  bg-yellow-100 rounded-full">
                                                        <p className="text-xs leading-3 text-yellow-600">Pending</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded xl:mr-0 mr-4">
                                                        <p className="text-sm leading-none text-indigo-700">Confirm Order</p>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100">
                                                <td className="pl-8">06/02/2020</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Samantha Smith
                                                    <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <div className="flex items-center justify-center w-20 h-6  bg-green-100 rounded-full">
                                                        <p className="text-xs leading-3 text-green-600">Shipped</p>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr className="h-20 text-sm leading-none text-gray-800">
                                                <td className="pl-8">06/02/2020</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Apple Macbook 2020
                                                    <p className="text-gray-600 font-normal mt-2">PID: 982 0192</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">$2200</td>
                                                <td className="font-medium px-10 lg:px-6 xl:px-0">
                                                    Samantha Smith
                                                    <p className="text-gray-600 font-normal mt-2">samantha@gmail.com</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">WMC0191</p>
                                                </td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <div className="flex items-center justify-center w-20 h-6  bg-red-100 rounded-full">
                                                        <p className="text-xs leading-3 text-red-600">Cancelled</p>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/4 2xl:w-1/5 pt-7 xl:pl-8 pb-7 flex lg:flex-col md:flex-row flex-col w-full pl-4 xl:pr-0 pr-4">
                        <div className="md:w-full sm:w-1/2 w-full">
                            <p className="text-base font-semibold text-gray-800">Addresses</p>
                            <div className="mt-4">
                                <div className="flex bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-start">
                                        <div className="py-3 px-3 bg-purple-100 rounded-sm">
                                            <OfficeBuildingIcon className="h-6 text-purple-700"/>
                                        </div>
                                        <div flex-col>
                                            <p className="pl-5 text-sm font-bold text-gray-500 tracking-wider uppercase">Ship to</p>
                                            <p className="pl-5 py-2 leading-tight text-sm font-medium text-gray-800">Central delivery<br/>235 Biscayne Blvd Way<br/>33131 Miami<br/>United States</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-start">
                                        <div className="py-3 px-3 bg-green-100 rounded-sm">
                                            <ReceiptTaxIcon className="h-6 text-green-700"/>
                                        </div>
                                        <div flex-col>
                                            <p className="pl-5 text-sm font-bold text-gray-500 tracking-wider uppercase">Bill to</p>
                                            <p className="pl-5 py-2 leading-tight text-sm font-medium text-gray-800">AP Address for USA<br/>225 2nd Ave<br/>10065 New York<br/>United States</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:mt-7 md:mt-0 sm:mt-7 mt-7 lg:pl-0 md:pl-4 sm:pl-0 pl-0 md:w-full sm:w-1/2 w-full">
                            <p className="text-base font-semibold text-gray-800">Recent Updates</p>
                            <div className="mt-4">
                                <div className="flex bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-center">
                                        <div className="py-3 px-3 bg-purple-100 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 3H5L7 15C7.21572 15.6135 7.62494 16.1402 8.16602 16.501C8.7071 16.8617 9.35075 17.0368 10 17H17C17.6493 17.0368 18.2929 16.8617 18.834 16.501C19.3751 16.1402 19.7843 15.6135 20 15L21 8H5.8" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="pl-5 text-sm font-medium text-gray-600">Order# IDO-214-152</p>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-400">$145</p>
                                </div>
                                <div className="mt-4 bg-white shadow rounded py-2 pl-2 pr-4">
                                    <div className="flex items-center">
                                        <div className="py-3 px-3 bg-teal-400 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 9H16" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 13H14" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium pl-5">
                                            New message from <span className="text-blue-500">@kelly190</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-center">
                                        <div className="py-3 px-3 bg-gray-100  rounded-sm">
                                            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 14L12 11L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="pl-5 text-sm font-medium text-gray-600">New lead uploaded</p>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-400">40 min</p>
                                </div>
                                <div className="flex mt-4 bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-center">
                                        <div className="py-3 px-3 bg-purple-100 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 3H5L7 15C7.21572 15.6135 7.62494 16.1402 8.16602 16.501C8.7071 16.8617 9.35075 17.0368 10 17H17C17.6493 17.0368 18.2929 16.8617 18.834 16.501C19.3751 16.1402 19.7843 15.6135 20 15L21 8H5.8" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="pl-5 text-sm font-medium text-gray-600">Order# IDO-321-324</p>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-400">$103</p>
                                </div>
                                <div className="flex mt-4 bg-white shadow items-center w-full justify-between rounded py-2 pl-2 pr-4">
                                    <div className="flex items-center">
                                        <div className="py-3 px-3 bg-green-100 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 7H10" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 13H15" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13 17H15" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="pl-5 text-sm font-medium text-gray-600">Invoice generated</p>
                                    </div>
                                    <p className="text-xs text-blue-500">View</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:mt-7 md:mt-0 sm:mt-7 mt-7 lg:pl-0 md:pl-4 sm:pl-0 pl-0 md:w-full sm:w-1/2 w-full">
                            <p className="text-base font-semibold text-gray-800">Upcoming events</p>
                            <div className="mt-4 bg-gray-100 rounded py-3 pl-4 pr-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                        <p className="ml-1 text-xs  font-italic text-purple-400">11:30 AM</p>
                                    </div>
                                    <div className="relative">
                                        <button className="focus:outline-none">
                                            {show == 0 ? (
                                                <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg onClick={() => setShow(0)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </button>
                                        {show == 0 && (
                                            <div className="  bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-20 2xl:-ml-20">
                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm  text-gray-600">Meeting with stake holders</p>
                                    <p className="text-xs  italic font-italic text-gray-400">Discussion on the template design</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-gray-100 rounded py-3 pl-4 pr-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                                        <p className="ml-1 text-xs text-red-400">02:30 PM</p>
                                    </div>
                                    <div className="relative">
                                        <button className="focus:outline-none">
                                            {show == 1 ? (
                                                <svg onClick={() => setShow(null)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg onClick={() => setShow(1)} className="dropbtn" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16668 10.8333C4.62691 10.8333 5.00001 10.4602 5.00001 10C5.00001 9.53976 4.62691 9.16666 4.16668 9.16666C3.70644 9.16666 3.33334 9.53976 3.33334 10C3.33334 10.4602 3.70644 10.8333 4.16668 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53976 9.16666 10C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </button>
                                        {show == 1 && (
                                            <div className="  bg-white shadow w-24 absolute z-30 -ml-16 xl:-ml-20 2xl:-ml-20">
                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className="text-sm  text-gray-600">Office interior discussion</p>
                                    <p className="text-xs  text-gray-400">What to add and what not to add</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
