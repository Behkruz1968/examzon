import React from "react";

const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-screen-xl mx-auto">
      {/* Card 1 */}
      <div className="bg-gray-100 p-4 rounded-md text-center flex flex-col justify-between">
        <h2 className="text-lg font-bold text-black mb-2">Добро пожаловать!</h2>
        <p className="text-sm text-gray-700 mb-4">
          Войдите, чтобы оставлять отзывы <br />
          и пользоваться другими функциями <br />
          авторизованных пользователей.
        </p>
        <button className="bg-indigo-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition">
          Войти в личный кабинет
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-200 p-4 rounded-md text-center flex flex-col justify-center items-center">
        <div className="text-lg font-bold text-blue-900 mb-2">Покупать<br />как юрлицо</div>
        <svg
          className="w-8 h-8 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M6 2a2 2 0 00-2 2v2h12V4a2 2 0 00-2-2H6zM4 8v6a2 2 0 002 2h8a2 2 0 002-2V8H4z" />
        </svg>
      </div>

      {/* Card 3 */}
      <img src="https://imtihin-6.vercel.app/assets/doczon-B3RLtbqx.jpg" alt="" />

      {/* Card 4 */}
   <img src="https://imtihin-6.vercel.app/assets/foodee-Dfi811md.jpg" alt="" />
    </div>
  );
};

export default InfoSection;
