"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Array of people data (replace with actual data)
  const people = [
    { name: "Hazman Wirayudha", nim: "1101213280", image: "/img/1.png" },
    { name: "Zidane Muhamad Hussein", nim: "1101213332", image: "/img/2.jpg" },
    { name: "Maharddhika Paramananda", nim: "1101213174", image: "/img/3.jpg" },
    { name: "Muhammad Sultan Pasha", nim: "1101213142", image: "/img/4.jpg" },
    { name: "Ranggi Briliando", nim: "1101213359", image: "/img/5.jpg" },
  ];

  return (
    <div className="py-10 px-10 text-center">
      <h2 className="text-3xl font-bold mb-8">Home Page</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {people.map((person, index) => (
          <div key={index} className="text-center group">
            <img
              src={person.image}
              alt={person.name}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <p className="font-semibold">{person.name}</p>
            <p>{person.nim}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className="btn btn-primary px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => router.push("/products")}
        >
          Go to Products
        </button>
      </div>
    </div>
  );
}
