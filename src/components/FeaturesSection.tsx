"use client";

import { Code, Laptop, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-18">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                relative group 
                rounded-xl 
                bg-[#f6f3ff] 
                p-6 pt-20 md:p-8 md:pt-24
                shadow-[0_24px_40px_rgba(0,0,0,0.06)]
                ring-1 ring-black/5
              "
            >
              {/* Circle pinned to the CARD'S top-right corner */}
              <div
                className="
                  absolute
                  -top-10
                  left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0
                  w-28 h-28 md:w-32 md:h-32
                  rounded-full 
                  bg-[#6c1898]
                  shadow-[0_30px_40px_rgba(0,0,0,0.3)]
                  flex items-center justify-center
                "
              >
                <item.icon
                  className="
                    w-14 h-14 text-white
                    transition-transform duration-200 
                    group-hover:-translate-y-1 
                    group-hover:scale-[1.06]
                  "
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
                {item.desc}
              </p>

              {/* Button */}
              <button
                className="
                  mt-8 inline-block 
                  rounded-full 
                  bg-white 
                  px-5 py-2.5 
                  text-[14px] font-semibold 
                  text-[#6c1898] 
                  shadow-[0_12px_24px_rgba(0,0,0,0.08)]
                  ring-1 ring-black/5
                  hover:bg-[#6c1898] hover:text-white
                  transition
                "
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "We build tailored software solutions that perfectly fit your business needs and scale with your growth.",
  },
  {
    icon: Laptop,
    title: "Web Applications",
    desc: "Modern, responsive web applications built with the latest technologies for optimal performance.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our experienced developers and designers work together to deliver exceptional results for every project.",
  },
];
