import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#8B8E99] mt-10 pt-10 pb-20 border-t border-[#ddd] text-sm">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="mb-4 font-bold text-black text-base">Biz haqimizda</h3>
          <a href="https://uzum.uz/uz/about/delivery-points" className="block mb-2 hover:text-black">
            Yetkazib berish nuqtalari
          </a>
          <a href="https://uzum.uz/uz/about/careers" className="block hover:text-black">
            Vakansiyalar
          </a>
        </div>

        {/* User */}
        <div>
          <h3 className="mb-4 font-bold text-black text-base">Foydalanuvchi</h3>
          <a href="tel:+998781501115" className="block mb-2 hover:text-black">
            Kontaktlar
          </a>
          <a href="https://uzum.uz/uz/faq" className="block hover:text-black">
            Ko‘p so‘raladigan savollar
          </a>
        </div>

        {/* Business */}
        <div>
          <h3 className="mb-4 font-bold text-black text-base">Biznes</h3>
          <a href="https://seller.uzum.uz/" className="block mb-2 hover:text-black">
            Sotuvchi bo‘lish
          </a>
          <a href="https://seller.uzum.uz/seller/signin" className="block hover:text-black">
            Shaxsiy kabinet
          </a>
        </div>

        {/* Download + Social */}
        <div>
          <h3 className="mb-4 font-bold text-black text-base">Ilovani yuklab olish</h3>
          <div className="flex flex-col gap-2 mb-6">
            <a
              href="https://apps.apple.com/ru/app/uzum-market"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaApple className="text-xl" />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uz.uzum.app"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaGooglePlay className="text-xl" />
              Google Play
            </a>
          </div>

          <h3 className="mb-3 font-bold text-black text-base">Ijtimoiy tarmoqlar</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/zon.uz"
              className="hover:text-pink-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://t.me/zonuzofficial"
              className="hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
