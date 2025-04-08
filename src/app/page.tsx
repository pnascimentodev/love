"use client";

import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="w-full max-w-md mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-12 text-pink-600">
          Escaneie o QR Code ❤️
        </h1>
        <div className="bg-white p-8 rounded-2xl shadow-xl mx-auto w-fit transform hover:scale-105 transition-transform duration-300">
          <QRCodeSVG 
            value="/amor"
            size={256}
            level="H"
            includeMargin={true}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
