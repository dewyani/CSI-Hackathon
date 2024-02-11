import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SidebarPage = () => {
    return (
        <div>
            <Sidebar className="h-screen border-2">
                <div className='flex items-center m-1'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                <Sidebar.Logo href="/dashboard_Agency/stats">
                    SupportSync
                </Sidebar.Logo>
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup> 
                        <Sidebar.Item href="/dashboard_Agency/stats" icon={HiChartPie}>
                            Statistics
                        </Sidebar.Item>
                        <Sidebar.Item href="/dashboard_Agency/timeline" icon={HiViewBoards}>
                            Update
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

        </div>
    )
}

export default SidebarPage