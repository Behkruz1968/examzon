import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white text-[#8B8E99] mt-10 pt-10 pb-20 border-t border-[#36364033]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
        {/* About */}
        <div>
          <h3 className="mb-5 font-bold text-[16px] text-black">{t("footer.about")}</h3>
          <a href="https://uzum.uz/uz/about/delivery-points" className="block mb-2 hover:text-black transition">
            {t("overview.location")}
          </a>
          <a href="https://uzum.uz/uz/about/careers" className="block hover:text-black transition">
            {t("footer.vacancy")}
          </a>
        </div>

        {/* User */}
        <div>
          <h3 className="mb-5 font-bold text-[16px] text-black">{t("footer.user")}</h3>
          <a href="tel:+998781501115" className="block mb-2 hover:text-black transition">
            {t("footer.contact")}
          </a>
          <a href="https://uzum.uz/uz/faq" className="block hover:text-black transition">
            {t("overview.faq")}
          </a>
        </div>

        {/* Business */}
        <div>
          <h3 className="mb-5 font-bold text-[16px] text-black">{t("footer.business")}</h3>
          <a href="https://seller.uzum.uz/" className="block mb-2 hover:text-black transition">
            {t("footer.buyin")}
          </a>
          <a href="https://seller.uzum.uz/seller/signin" className="block hover:text-black transition">
            {t("footer.cabinet")}
          </a>
        </div>

        {/* Download + Media */}
        <div>
          <h3 className="mb-5 font-bold text-[16px] text-black">{t("footer.download")}</h3>
          <div className="flex gap-4 mb-5">
            <a
              href="https://apps.apple.com/ru/app/uzum-market"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaApple className="text-xl" /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=uz.uzum.app"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaGooglePlay className="text-xl" /> Google Play
            </a>
          </div>

          <h3 className="mb-3 font-bold text-[16px] text-black">{t("footer.media")}</h3>
          <div className="flex gap-4">
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
    </div>
  );
}
