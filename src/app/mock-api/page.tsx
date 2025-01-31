"use client"; // Client component for state management

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

interface Home {
    id: number;
    name: string;
    image: string;
    price: number;
}

const BestHomes = () => {
    const [homes, setHomes] = useState<Home[]>([]);

    useEffect(() => {
        const fetchHomes = async () => {
            try {
                const response = await fetch('https://677f26c60476123f76a58163.mockapi.io/test');
                const data = await response.json();
                setHomes(data);
            } catch (error) {
                console.error('Error fetching homes:', error);
            }
        };

        fetchHomes();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {homes.map((home) => (
                <Link key={home.id} href={`/mock-api/${home.id}`}>
                    <div className="relative group cursor-pointer">
                        <img 
                            src={home.image} 
                            alt={`Home ${home.name}`} 
                            className="w-full h-auto transition-transform transform group-hover:scale-105 hover:brightness-75"
                        />
                        <p className="mt-2 text-center">Price: {home.price}</p>
                        <h1 className="mt-2 text-center">{home.name}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BestHomes;
