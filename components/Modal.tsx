import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Item } from "./constants";

export default function Modal({ items }: { items: Item[] }) {
  const router = useRouter();

  if (!router) {
    return null; // Ensure the router is mounted before rendering
  }

  const handleNavigation = (item: Item) => {
    console.log(`Navigating to ${item.name}`);
    if(item.name === "Overview"){
      router.push('/overview');
    }
    else if(item.name === "Careers"){
      router.push('/careers');
    }
    else if(item.name === "Contact Us"){
      router.push('/contact');
    }
  }

  return (
    <div className="flex w-[700px] bg-white shadow-xl rounded-[2rem] overflow-hidden">
      {/* Left links */}
      <div className="flex-1 px-6 py-8 space-y-2">
        {items?.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigation(item)} // Navigate to /contact-us on click
            className="text-black text-lg px-4 py-3 rounded-xl cursor-pointer hover:bg-[#f1f5ff] transition-colors"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Right visual */}
      <div className="w-[280px] p-6 bg-[#f8f9fc] flex flex-col justify-between items-start rounded-r-3xl">
        {/* Add your right visual content here */}
      </div>
    </div>
  );
}