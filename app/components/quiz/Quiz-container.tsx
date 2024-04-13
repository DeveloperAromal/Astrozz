import React from "react";

export default function QuizContainer() {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Astronomy Quiz
        </h1>
        <p className="text-lg text-gray-700 mb-10 px-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo
          fugiat deserunt cupiditate, eius aliquid asperiores voluptate ducimus
          assumenda voluptatem vitae sit explicabo nostrum eaque sunt possimus
          fuga debitis expedita?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="w-full px-8 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out">
            Answer 1
          </button>
          <button className="w-full px-8 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out">
            Answer 2
          </button>
          <button className="w-full px-8 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out">
            Answer 3
          </button>
          <button className="w-full px-8 py-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out">
            Answer 4
          </button>
        </div>
      </div>
    </section>
  );
}
