"use client";
import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-6">บทเรียนที่ 2 แสดง / ซ่อน ข้อความ</h1>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-xl text-xl hover:bg-blue-700"
        onClick={() => setShowText(!showText)}
      >
        {showText ? "ซ่อนข้อความ" : "แสดงข้อความ"}
      </button>

      {showText && (
        <div className="mt-6 text-2xl text-green-600">
          วันนี้คุณวิดพื้นหรือยัง
        </div>
      )}
    </div>
  );
}

export default ShowHideText;
