import React from "react";

const articles = [
  {
    date: "13.06.2023",
    title: "Виброметры для двигателей и механизмов",
    image: "https://api.zon.uz/files/images/vibrometri-dlya-dvigateley-i-mexanizmov.webp",
  },
  {
    date: "12.06.2023",
    title: "Частотный преобразователь — что такое и для чего он нужен",
    image: "https://api.zon.uz/files/images/chastotniy-preobrazovatel-chto-takoe-i-dlya-chego-on-nujen.webp",
  },
  {
    date: "11.06.2023",
    title: "Зачем нужен такой прибор, как лазерный тахометр?",
    image: "https://api.zon.uz/files/images/zachem-nujen-takoy-pribor-kak-lazerniy-taxometr.webp",
  },
  {
    date: "10.04.2023",
    title: "Люксометр - Измеритель яркости и освещённости",
    image: "https://api.zon.uz/files/images/lyuksometr-izmeritel-yarkosti-i-osveshyonnosti.webp",
  },
  {
    date: "09.04.2023",
    title: "Термометр для измерения температуры объекта",
    image: "https://api.zon.uz/files/images/termometr-dlya-izmereniya-temperaturi-obekta.webp",
  },
];

const ArticlesSection = () => {
  return (
    <section className="px-4 md:px-10 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">Статьи</h2>
        <a href="#" className="text-sky-600 font-medium hover:underline">
          Смотреть все
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <h3 className="text-sm font-medium text-gray-800">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
