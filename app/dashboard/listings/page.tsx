"use client";
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import DropdownActions from '@/components/DropdownActions'
import QuickViewCard from '@/components/QuickViewCard';


const listings = [
    {
        address: "4445 Parker St",
        location: "Burnaby, BC V5C 3C7, Canada",
        agent: "Kira Kiravarga",
        added: "Mar 14, 2025",
        status: true,
    },
    {
        address: "3455 Ascot Pl #610",
        location: "Vancouver, BC V5R 6B7, Canada",
        agent: "Ron Basra",
        added: "Mar 14, 2025",
        status: true,
    },
    {
        address: "10489 Delsom Crescent",
        location: "Delta, BC V4C 0B9, Canada",
        agent: "Derek Thornton",
        added: "Mar 14, 2025",
        status: true,
    },
    {
        address: "3559 Haida Dr",
        location: "Vancouver, BC V5M 3Y9, Canada",
        agent: "Timothy Ly",
        added: "Mar 14, 2025",
        status: true,
    },
    {
        address: "2871 Dundas St",
        location: "Vancouver, BC V5K 1R5, Canada",
        agent: "Vincent Hsu",
        added: "Mar 14, 2025",
        status: true,
    },
    {
        address: "8160 Lansdowne Rd",
        location: "Richmond, BC V6X 0A9, Canada",
        agent: "Ally Rennie",
        added: "Mar 14, 2025",
        status: false,
    },
    {
        address: "10448 University Dr",
        location: "Surrey, BC V3T 0S7, Canada",
        agent: "Jerry Liang",
        added: "Mar 14, 2025",
        status: false,
    },
]


const page = () => {
    const [showCard, setShowCard] = React.useState(false);
    const [type, setType] = React.useState('');

    const handleQuickView = () => {
        setShowCard(true);
    };
    const options = [
        { label: "Edit", onClick: () => console.log("Edit clicked") },
        {
            label: "Quick View", onClick: () => {
                handleQuickView()
                setType("listing")
            }
        },
        {
            label: "Delete",
            onClick: () => console.log("Deleted!"),
            confirm: true,
        },
    ];

    return (
        <div>
            <div className='w-full h-[80px] bg-[#E4E4E4] font-alexandria  z-10 relative  flex justify-between px-[20px] items-center' style={{ boxShadow: "0px 4px 4px #0000001F" }}
            >
                <p className='text-[16px] md:text-[24px] font-[400]  text-[#4290E9]'>Listings (7)</p>
                <Button className='w-[110px] md:w-[143px] h-[35px] md:h-[44px] border-[1px] border-[#4290E9] bg-[#EEEEEE] text-[14px] md:text-[16px] font-[400] text-[#4290E9] flex gap-[5px] items-center hover:text-[#fff] hover:bg-[#4290E9]'>+ New Listing</Button>
            </div>
            <div className="w-full relative">
                <Table className='font-alexandria px-0 overflow-x-auto whitespace-nowrap'>
                    <TableHeader >
                        <TableRow className='bg-[#E4E4E4] font-alexandria h-[54px] hover:bg-[#E4E4E4]'>
                            <TableHead className="text-[14px] font-[700] text-[#7D7D7D] pl-[20px]">Address</TableHead>
                            <TableHead className="text-[14px] font-[700] text-[#7D7D7D]">Location</TableHead>
                            <TableHead className="text-[14px] font-[700] text-[#7D7D7D]">Agent</TableHead>
                            <TableHead className="text-[14px] font-[700] text-[#7D7D7D]">Added</TableHead>
                            <TableHead className="text-[14px] font-[700] text-[#7D7D7D]">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {listings.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5}>No listings available.</TableCell>
                            </TableRow>
                        ) : (
                            listings.map((listing, i) => (
                                <TableRow key={i}>
                                    <TableCell
                                        onClick={() => {
                                            handleQuickView()
                                            setType('listings')
                                        }}
                                        className="text-[15px] font-[400] text-[#4290E9] pl-[20px]">{listing.address}</TableCell>
                                    <TableCell className="text-[15px] font-[400] text-[#7D7D7D]">{listing.location}</TableCell>
                                    <TableCell
                                        onClick={() => {
                                            handleQuickView()
                                            setType('agent')
                                        }}
                                        className="text-[15px] font-[400] text-[#4290E9]">{listing.agent}</TableCell>
                                    <TableCell className="text-[15px] font-[400] text-[#7D7D7D]">{listing.added}</TableCell>
                                    <TableCell className="text-[15px] font-[400] text-[#7D7D7D] flex justify-between items-center gap-2 pr-[20px]">
                                        <Switch
                                            checked={listing.status}

                                            className={`${listing.status ? '!bg-[#6BAE41]' : '!bg-[#E06D5E]'} data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500`}
                                        />
                                        <DropdownActions options={options} />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}

                    </TableBody>
                </Table>

                {showCard &&
                    (type === 'agent' ? (
                        <QuickViewCard
                            type="agent"
                            data={{
                                profileImage: "/kira.jpg",
                                name: "Kira Kiravarga",
                                company: "Kira Realtor Services",
                                address: "1254 Burrard Street",
                                email: "kirak@mail.com",
                                mobile: "604-778-1247",
                                office: "604-484-5585",
                                notes:
                                    "Top rated, pays on time, treat with extra care. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                                activity: "No records"
                            }}
                            onClose={() => setShowCard(false)}
                        />
                    ) : (
                        <QuickViewCard
                            type="listing"
                            data={{
                                profileImage: "/kira.jpg",
                                name: "Kira Kiravarga",
                                company: "Kira Realtor Services",
                                address: "1254 Burrard Street",
                                price: 749650000,
                                bedrooms: 3,
                                bathrooms: 2.5,
                                sqft: 2.5,
                                year: 2020,
                                parking: '3',
                                propertyType: "Detached Home",
                                lotSize: '0',
                                status: "Just Listed",
                                stats: { photos: 0, tours: 0, visitors: 0, imageViews: 0 },
                                activity: "No records"
                            }}
                            onClose={() => setShowCard(false)}
                        />
                    ))
                }


            </div>
        </div >
    )
}

export default page