"use client";
import React from "react";
import { Card, CardContent } from "@/src/frontend/both/components/ui";
import { Avatar , AvatarBadge ,AvatarFallback ,AvatarImage } from "@/src/frontend/both/components/ui";
import { Button } from "@/src/frontend/both/components/ui";
import { ScrollArea, ScrollBar } from "@/src/frontend/both/components/ui";
import Image from "next/image";
import Link from "next/link";


// export interface Artwork {
//     artist: string
//     art: string
// }

// export const works: Artwork[] = [
//     {
//         artist: "Ornella Binni",
//         art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//         artist: "Tom Byrom",
//         art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//         artist: "Vladimir Malyavko",
//         art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
//     },
// ]

export const navLinks = [
    { id: 1, name: "Home", url: "/", logo: "" },
    { id: 2, name: "Projects", url: "/projects", logo: "" },
    { id: 3, name: "Skills", url: "/skills", logo: "" },
    { id: 4, name: "Contact", url: "/contact", logo: "" },
    { id: 5, name: "About", url: "/about", logo: "" },
]

function MainHeader(){
    return(
        <div className="w-[80%] mx-auto rounded-xl bg-white shadow-lg items-center gap-2 justify-center ">

                <Card className="p-2 sm:p-4">
                    <CardContent className="py-0">
                        <div className="flex items-center justify-between space-x-2">
                            <section>
                                <Avatar>
                                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@shadcn" />
                                    <AvatarFallback>AK</AvatarFallback>
                                </Avatar>
                            </section>
                            {/* <section className="flex items-center gap-4 sm:gap-6"> */}
                                <section>
                                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                                        {navLinks.map((nav) => (
                                            <Link key={nav.id} href={nav.url} >
                                                <div className="flex items-center gap-2">
                                                    {/* <Image
                                                        src={nav.logo}
                                                        alt={nav.name}
                                                        width={10}
                                                        height={10}
                                                        loading="lazy"
                                                    /> */}
                                                    <span>{nav.name}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                                <section>
                                    <Button
                                        variant="outline"
                                        size={"default"}
                                    >
                                        Download CV
                                    </Button>
                                </section>

                            {/* </section> */}
                          
                        </div>
                    </CardContent>
                </Card>
              
       
        </div>
    )
}
export default MainHeader;