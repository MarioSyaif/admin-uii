import { useState } from "react";

export default function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
   
    <div
      onClick={handleClick}
      className={`p-5 rounded-lg shadow-md cursor-pointer transition-colors duration-200 ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2 capitalize">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}