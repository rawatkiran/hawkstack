import { Item } from "./constants";

export default function Modal({ items }: { items: Item[] }) {
  return (
     <div className="flex w-[700px] bg-white shadow-xl rounded-[2rem] overflow-hidden">
      {/* Left links */}
      <div className="flex-1 px-6 py-8 space-y-2">
      {items?.map((item, idx) => (
          <div
            key={idx}
            className="text-black text-lg px-4 py-3 rounded-xl cursor-pointer hover:bg-[#f1f5ff] transition-colors"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Right visual */}
      <div className="w-[280px] p-6 bg-[#f8f9fc] flex flex-col justify-between items-start rounded-r-3xl">
        {/* <Image
          src={supportImage}
          alt="Support Illustration"
          width={250}
          height={180}
          className="rounded-xl"
        /> */}
        {/* <div className="mt-4 text-red-600 font-semibold cursor-pointer hover:underline">
          Get support →
        </div> */}
      </div>
    </div>
  );
}
