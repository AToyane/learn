import React, { useState, useEffect } from "react";
import clsx from "clsx";


export default function TableCard() {
 return (
<div className="mt-5 md:mt-10 border rounded shadow bg-white border-gray-100">
                                <div className="py-4 md:py-6 pl-4 md:pl-6">
                                    <div className="font-bold text-sm text-gray-500 uppercase tracking-wider">My To-Do List</div>
                                    <div class="text-sm text-gray-500 font-medium">4 pending tasks</div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <thead className="border-b border-t">
                                            <tr className="bg-gray-50 h-16 w-full text-sm leading-none text-gray-800">
                                                <th className="font-medium text-gray-600 text-left pl-8">Process</th>
                                                <th className="font-medium text-gray-600 px-10 lg:px-6 xl:px-0 text-left">Task</th>
                                                <th className="font-medium text-gray-600 text-left px-10 lg:px-6 xl:px-0 ">Object</th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full">
                                            <tr className="h-16 text-sm leading-none text-gray-800 border-b border-gray-100 hover:bg-gray-50" href="#">
                                                <td className="pl-8">Order - PO Automation</td>
                                                <td className="px-10 lg:px-6 xl:px-0">Supplier Review</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">PO000278 - Req. 6/18/2021-Extremely Clean - Extremely Clean</p>
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-sm leading-none text-gray-800 border-b border-gray-100 hover:bg-gray-50">
                                                <td className="pl-8">Order - PO Automation</td>
                                                <td className="px-10 lg:px-6 xl:px-0">Supplier Review</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">PO000278 - Req. 6/14/2021-Manutan - Manutan</p>
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-sm leading-none text-gray-800 border-b border-gray-100 hover:bg-gray-50">
                                                <td className="pl-8">Contractual Documents Workflow</td>
                                                <td className="px-10 lg:px-6 xl:px-0">Supplier Approval</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">997 Contract - Test 2</p>
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-sm leading-none text-gray-800 border-b border-gray-100 hover:bg-gray-50">
                                                <td className="pl-8">Contractual Documents Workflow</td>
                                                <td className="px-10 lg:px-6 xl:px-0">Supplier Approval</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">997 Contract - Test 2</p>
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-sm leading-none text-gray-800 border-b border-gray-100 hover:bg-gray-50">
                                                <td className="pl-8">Contractual Documents Workflow</td>
                                                <td className="px-10 lg:px-6 xl:px-0">Supplier Approval</td>
                                                <td className="px-10 lg:px-6 xl:px-0">
                                                    <p className="underline text-blue-500">997 Contract - Test 2</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
 );
}