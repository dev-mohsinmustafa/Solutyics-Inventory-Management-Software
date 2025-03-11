"use client"

import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import SubscriptionCard from './SubscriptionCard';

// import CollapsibleLink from './CollapsibleLink';
import SidebarDropdownLink from './SidebarDropdownLink';
import Image from 'next/image';


const Sidebar = ({ showSidebar, setShowSidebar }) => {

    const inventoryLinks = [
        {
            title: "All",
            href: "/dashboard/inventory",
        },
        {
            title: "Items",
            href: "/dashboard/inventory/items",
        },
        {
            // title: "Item Groups",
            title: "Categories",
            href: "/dashboard/inventory/categories",
        },
        {
            title: "Brands",
            href: "/dashboard/inventory/brands",
        },
        {
            title: "Units",
            href: "/dashboard/inventory/units",
        },
        {
            title: "Warehouse",
            href: "/dashboard/inventory/warehouse",
        },
        {
            title: "Inventory Adjustments",
            href: "/dashboard/inventory/adjustments",
        },
        {
            title: "Supplier",
            href: "/dashboard/inventory/suppliers",
        },
    ]


    const salesLinks = [
        {
            title: "Customers",
            href: "/",
        },
        {
            title: "Sales Orders",
            href: "/",
        },
        {
            title: "Shipments",
            href: "/",
        },
        {
            title: "Invoices",
            href: "/",
        },
        {
            title: "Sales Receipts",
            href: "/",
        },
        {
            title: "Payment Received",
            href: "/",
        },
        {
            title: "Sales Returns",
            href: "/",
        },
        {
            title: "Credit Notes",
            href: "/",
        },
    ]


    return (
        <>
            {/* bg-purpleColor */}
            {/* <div className='w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50'> */}
            <div className={`${showSidebar ? "w-60 min-h-screen bg-slate-800 text-slate-50 fixed lg:block z-50" : "w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"}`}>

                {/* Top Part */}
                <div className="flex flex-col">
                    {/* Logo */}
                    {/* bg-white */}
                    <div className="flex justify-between">
                        <Link href={"/"} className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full">
                            <ShoppingCart />
                            <Image src={"/logo.png"} alt="Company Logo" width={150} height={50} />
                            {/* <span className='text-xl font-semibold'>Inventory</span> */}
                        </Link>
                        {/* px-4 */}
                        <button className='bg-slate-950 px-2 py-3 lg:hidden' onClick={()=>setShowSidebar(false)}>
                            <X className='w-6 h-6 text-white '/>
                        </button>
                    </div>
                    {/* Links */}
                    <nav className='flex flex-col gap-3 px-3 py-6 '>
                        <Link href={"/dashboard/home/overview"} className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'>
                            <Home className='w-4 h-4' />
                            <span>Home</span>
                        </Link>

                        {/* <Collapsible>
                            <CollapsibleTrigger className='p-2 flex items-center space-x-2'>
                            <BaggageClaim className='w-4 h-4' />
                            <span>Inventory</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                {
                                    inventoryLinks.map((item, index) => {
                                        return (
                                         <CollapsibleLink key={index} item={item}/>
                                        )
                                    })
                                }
                            </CollapsibleContent>
                       </Collapsible> */}

                        {/* make Collapsible code in component */}
                        <SidebarDropdownLink items={inventoryLinks} title="Inventory" icon={BaggageClaim} setShowSidebar={setShowSidebar}/>
                        {/* <SidebarDropdownLink items={salesLinks} title="Sales" icon={ShoppingBasket} /> */}



                        {/* <button className='p-2 flex items-center space-x-2'>
                            <ShoppingBasket className='w-4 h-4' />
                            <span>Sales</span>
                        </button>
                        <button className='p-2 flex items-center space-x-2'>
                            <ShoppingBag className='w-4 h-4' />
                            <span>Purchases</span>
                        </button> */}

                        {/* <Link href={""} className='p-2 flex items-center space-x-2'>
                            <Cable className='w-4 h-4' />
                            <span>Integrations</span>
                        </Link>
                        <Link href={""} className='p-2 flex items-center space-x-2'>
                            <BarChart4 className='w-4 h-4' />
                            <span>Reports</span>
                        </Link>
                        <Link href={""} className='p-2 flex items-center space-x-2'>
                            <Files className='w-4 h-4' />
                            <span>Documents</span>
                        </Link> */}
                    </nav>
                    <SubscriptionCard />
                </div>

                {/* Bottom */}
                <div className="flex flex-col ">
                    <button className="bg-slate-950 flex space-x-2 items-center py-3 px-2 justify-center">
                        <ChevronLeft />
                    </button>
                </div>

                {/* Subscription Card */}
                {/* Footer Icon */}
            </div>
        </>
    )
}

export default Sidebar;