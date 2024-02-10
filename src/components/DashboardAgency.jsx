import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const DashboardAgency = () => {
    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">
                <div className='flex'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                <Sidebar.Logo href="#">
                    Sahayata
                </Sidebar.Logo>
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup> 
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

        </div>
    )
}

export default DashboardAgency