import React, { useState } from "react";

const DiseaseDetection = () => {
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
      const dummyData = [
        {
          disease: "Powdery Mildew",
          description:
            "Powdery mildew is a fungal disease that affects a wide range of plants. It is caused by many different species of fungi in the order Erysiphales. The fungus appears as white or gray powdery spots on the leaves and stems of infected plants.",
        },
        {
          disease: "Leaf Spot",
          description:
            "Leaf spot diseases are caused by a variety of fungi and bacteria, leading to spots on leaves. These spots can be of different colors, such as brown, black, or yellow, and can have a variety of shapes.",
        },
        {
          disease: "Root Rot",
          description:
            "Root rot is a condition in which the roots of a plant rot and decay. It is often caused by waterlogged soil or poor drainage, which creates an environment conducive to the growth of harmful fungi or bacteria.",
        },
        {
          disease: "Rust",
          description:
            "Rust diseases are fungal infections that cause rust-colored pustules on the leaves, stems, and sometimes the flowers and fruits of plants. They are caused by various species of fungi and can severely affect plant health, leading to reduced photosynthesis, vigor, and yield.",
        },
      ];
      const randomIndex = Math.floor(Math.random() * dummyData.length);
      setResult(dummyData[randomIndex]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-40 mb-60 border">
      <h2 className="text-xl font-bold">Plant Disease Predictor</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex gap-10 items-center justify-center"
      >
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
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;
