"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function GameDealsPage() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        function fetchDeals() {
            axios.get('https://www.cheapshark.com/api/1.0/deals').then((res) => {
                console.log(res);
                setDeals(res.data);
            }).catch(err => console.error("Error fetching data:", err));
        }
        fetchDeals();
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-bold">รายการเกมลดราคา</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {deals.map((item) => (
                    <div key={item.dealID} className="bg-white shadow-md border border-gray-200 rounded-xl p-3 hover:shadow-lg transition-shadow">
                        <h2 className="text-center text-lg font-semibold h-14 overflow-hidden mb-2">
                            {item.title}
                        </h2>
                        
                        <div className="flex justify-center mt-2">
                            {/* แก้ไข Template Literal ตรงนี้ */}
                            <a href={`https://www.cheapshark.com/redirect?dealID=${item.dealID}`} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={item.thumb} 
                                    alt={item.title} 
                                    className="rounded-lg h-32 object-cover"
                                />
                            </a>
                        </div>

                        <div className="text-center mt-3">
                            <p className="font-bold text-red-600 text-xl">${item.salePrice}</p>
                            <p className="text-sm line-through text-gray-400">Normal: ${item.normalPrice}</p>
                            <p className="text-sm font-semibold text-green-700 bg-green-100 inline-block px-2 py-1 rounded mt-1">
                                ลดไป {Math.round(item.savings)}%
                            </p>
                            <div className="mt-3">
                                <a 
                                    href={`https://www.cheapshark.com/redirect?dealID=${item.dealID}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-block w-full"
                                >
                                    ไปที่หน้าโปรโมชั่น
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameDealsPage;