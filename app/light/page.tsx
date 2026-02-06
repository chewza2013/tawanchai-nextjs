"use client";
import { useState } from "react";

function LightPage() {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div>
      <div className="text-center mt-6 p-4">
        <h1 className="text-3xl">บทเรียนที่ 1 State ของการเปิด / ปิด หลอดไฟ</h1>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-green-500 p-5 rounded-2xl text-xl cursor-pointer hover:bg-red-400"
          onClick={() => setIsLightOn(!isLightOn)}
        >
          เปิด / ปิด หลอดไฟ
        </button>
      </div>
      <div className="text-center text-5xl mt-4">
        <h1>สถานะของหลอดไฟ: {isLightOn ? "เปิด" : "ปิด"}</h1>
        <div className="flex justify-center">
             {isLightOn ? (
          <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
        ) : (
          <img src="https://www.w3schools.com/js/pic_bulboff.gif" />
        )}
        </div>

      </div>
    </div>
  );
}

export default LightPage;