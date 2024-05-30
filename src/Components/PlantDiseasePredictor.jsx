import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const dummyData = [
  {
    disease: "Powdery Mildew",
    description:
      "Powdery mildew is a fungal disease that affects a wide range of plants. It is caused by many different species of fungi in the order Erysiphales. The fungus appears as white or gray powdery spots on the leaves and stems of infected plants.",
    pesticides: [
      {
        name: "Affinity",
        dosage: "2-5 Leaf stage 25 gm/acre",
        image: "https://m.media-amazon.com/images/I/71uBoDgWM8L.jpg",
      },
      {
        name: "Critel",
        dosage: "2-3 Leaf stage 400 ml/acre",
        image:
          "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    disease: "Leaf Spot",
    description:
      "Leaf spot diseases are caused by a variety of fungi and bacteria, leading to spots on leaves. These spots can be of different colors, such as brown, black, or yellow, and can have a variety of shapes.",
    pesticides: [
      {
        name: "Fiesta Forte",
        dosage: "0-3 DAT 4 kg/acre",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        name: "Sumet Pro",
        dosage: "2-5 Leaf stage of weed 8 gm/acre",
        image:
          "https://5.imimg.com/data5/ANDROID/Default/2022/8/BO/QJ/KM/98232609/product-jpeg-500x500.jpg",
      },
    ],
  },
  {
    disease: "Root Rot",
    description:
      "Root rot is a condition in which the roots of a plant rot and decay. It is often caused by waterlogged soil or poor drainage, which creates an environment conducive to the growth of harmful fungi or bacteria.",
    pesticides: [
      {
        name: "Colorado",
        dosage: "2-5 Leaf stage of weed 80-100 ml/acre",
        image:
          "https://www.chemservice.com/skin/frontend/argento/flat/images/placeholder.png",
      },
    ],
  },
  {
    disease: "Rust",
    description:
      "Rust diseases are fungal infections that cause rust-colored pustules on the leaves, stems, and sometimes the flowers and fruits of plants. They are caused by various species of fungi and can severely affect plant health, leading to reduced photosynthesis, vigor, and yield.",
    pesticides: [
      {
        name: "Affinity",
        dosage: "2-5 Leaf stage 25 gm/acre",
        image: "https://m.media-amazon.com/images/I/71uBoDgWM8L.jpg",
      },
      {
        name: "Critel",
        dosage: "2-3 Leaf stage 400 ml/acre",
        image:
          "data:image/jpeg;base64,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",
      },
    ],
  },
];

const PlantDiseasePredictor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);

    // Simulate a delay to mimic an API call
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dummyData.length);
      setResult(dummyData[randomIndex]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-40 mb-60 border">
      <h2 className="text-xl font-bold">Plant Disease Predictor</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex gap-10 items-center justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 w-1/2 block text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-800 cursor-pointer focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload and Predict"}
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          <h3 className="font-bold">Prediction Results:</h3>
          <p>
            <strong>Disease:</strong> {result.disease}
          </p>
          <p className="mt-2">{result.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {result.pesticides.map((pesticide, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={pesticide.image}
                  alt={pesticide.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <p className="mt-2 text-center text-sm font-semibold">
                  {pesticide.name}
                </p>
                <p className="text-center text-xs">{pesticide.dosage}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantDiseasePredictor;
