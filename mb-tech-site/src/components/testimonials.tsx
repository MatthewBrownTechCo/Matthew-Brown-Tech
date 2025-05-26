"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Our church previously used plug and play website templates, but we weren't getting near the effectiveness and engagement we believed our ministry needed. In short, we needed a site tailored to our church, ministry, mission, and reach. Not only did Matthew Brown build the website we needed from scratch, but he went far above anything we asked for and built a beautifully designed, easy-to-use website that already sees results byond expectation. In the modern eara, your website is the way you will reach or deter people from your church or business. I would recommend, and continue to recommend, Matthew Brown to help you accomplish your mission!",
    author: "B. Labombard - Columbia Metropolitan Area",
  },
  {
    quote: "Great experience! Hassle free and super prompt!",
    author: "J. Cumper - Columbia Metropolitan Area",
  },
  {
    quote:
      "Excellent Service! I highly recommend to anyone needing a dumpster rental!",
    author: "R. Wilson - Columbia Metropolitan Area",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonials every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative max-w-2xl w-full p-8 overflow-hidden bg-[rgb(0,48,128)] text-white rounded-2xl shadow-lg min-h-[250px]">
        <div className="text-2xl font-bold text-center mb-4">
          Testimonials of Happy Customers
        </div>
        <div className="relative overflow-hidden">
          <div
            className="testimonial-slide flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-item w-full flex-shrink-0">
                <p className="text-xl italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
