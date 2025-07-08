'use client';

import { Feature } from "./constants";

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="flex w-[1000px] bg-white rounded-3xl shadow-sm px-10 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
        {features?.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* <div>{feature.icon}</div> */}
            <div>
              <h4 className="text-lg text-black">{feature.title}</h4>
              <p className="text-base text-gray-500 font-light mt-1 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeatureGrid;