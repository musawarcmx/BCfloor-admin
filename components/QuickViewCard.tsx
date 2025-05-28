import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Smartphone, X } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AgentData {
    profileImage: string;
    name: string;
    company: string;
    address: string;
    email: string;
    mobile: string;
    office: string;
    notes: string;
    activity?: string;
}

interface ListingStats {
    photos: number;
    tours: number;
    visitors: number;
    imageViews: number;
}

interface ListingData {
    profileImage: string;
    name: string;
    company: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    year: number;
    parking: string;
    propertyType: string;
    lotSize: string;
    status: string;
    stats: ListingStats;
    activity?: string;
}

type QuickViewCardProps =
    | { type: "agent"; data: AgentData; onClose?: () => void }
    | { type: "listing"; data: ListingData; onClose?: () => void };

export default function QuickViewCard({ type, data, onClose }: QuickViewCardProps) {
    const isAgent = type === "agent";

    return (
        <Card style={{ minHeight: 'calc(100vh - 80px)' }} className="w-[405px] flex flex-col justify-between  font-alexandria p-4 border-[1px] border-[#BBBBBB] rounded-none space-y-4 absolute top-0 right-0 z-50 bg-[#EEEEEE]">
            <CardContent className="flex flex-col gap-[12px] p-0">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-[24px] font-[500] text-[#666666] leading-8">
                        {isAgent ? "Agent Quick View" : "Listing Quick View"}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Profile Info */}
                <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-3 items-start">
                    <Avatar className="h-8 w-8 row-span-2">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-[#4290E9] font-[500] text-[24px]">{data.name}</div>
                    <div className="text-[15px] font-[500] text-[#666666]">{data.company}</div>
                </div>


                {/* Details Section */}
                <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 ">
                        <MapPin className="w-[24px] text-[#666666]" strokeWidth={1} />
                        <p className="hover:underline text-[15px] font-[500] text-[#4290E9] leading-[32px]">{data.address}</p>
                    </div>

                    {isAgent ? (
                        <div className="grid grid-cols-1 gap-y-[12px]">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-[24px] text-[#666666]" strokeWidth={1} />
                                <span className="text-[15px] font-[500] text-[#4290E9] leading-[32px]">{data.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Smartphone className="w-[24px] text-[#666666]" strokeWidth={1} />
                                <span className="text-[15px] font-[500] text-[#666666] leading-[32px]">{data.mobile}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-[24px] text-[#666666]" strokeWidth={1} />
                                <span className="text-[15px] font-[500] text-[#666666] leading-[32px]">{data.office}</span>
                            </div>
                            <div className="text-[10px] text-[#8E8E8E] uppercase font-[700]">
                                Notes (Hidden from Agent)
                            </div>
                            <p className="text-[15px] font-[400] text-[#666666]">{data.notes}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-3 gap-x-4 gap-y-[19px] text-[15px] font-[400] text-[#666666]">
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Listing Price</span> ${data.price}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Bedrooms</span> {data.bedrooms}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Bathrooms</span> {data.bathrooms}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Square Footage</span> {data.sqft}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Year</span> {data.year}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Parking Spots</span> {data.parking}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Property Type</span> {data.propertyType}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Lot Size</span> {data.lotSize}</div>
                                <div className="flex flex-col items-start gap-[12px]"><span className="text-[10px] text-[#8E8E8E] font-[700]">Property Status</span> {data.status}</div>
                            </div>

                            <p className="text-[10px] text-[#8E8E8E] font-[700] !mt-[44px]">Statistics</p>
                            <div className="grid grid-cols-4 gap-x-4 gap-y-1 text-[15px] font-[400] text-[#666666]">
                                <div className="flex flex-col-reverse items-center gap-[12px] text-center h-fit"><span>Photos Viewed</span> {data.stats.photos}</div>
                                <div className="flex flex-col-reverse items-center gap-[12px] text-center h-fit"><span>Tour Viewed</span> {data.stats.tours}</div>
                                <div className="flex flex-col-reverse items-center gap-[12px] text-center h-fit"><span>Total Visitors</span> {data.stats.visitors}</div>
                                <div className="flex flex-col-reverse items-center gap-[12px] text-center h-fit"><span>Visitor Image View</span> {data.stats.imageViews}</div>
                            </div>
                        </>
                    )}
                </div>

                <div className="text-[10px] text-[#8E8E8E] uppercase font-[700]">Recent Activity</div>
                <p className="text-[15px] font-[400] text-[#666666]">{data.activity || "No records"}</p>

                {/* Actions */}

            </CardContent>
            <CardFooter className="p-0 !mt-[40px]">
                <div className=" w-full flex justify-start gap-[10px] ">
                    <Button className="bg-transparent border-[1px] border-[#4290E9] text-[#4290E9] rounded-none w-[132px] h-[32px] hover:text-[#fff]  hover:bg-[#4290E9]">Edit</Button>
                    <Button className="bg-[#4290E9] rounded-none text-white w-[132px] h-[32px]  hover:bg-[#4290E9]">History</Button>
                </div>
            </CardFooter>
        </Card>
    );
}
