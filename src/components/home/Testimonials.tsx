
import React from "react";

const testimonials = [
  {
    id: "1",
    name: "Sarah",
    role: "Interior Designer",
    quote:
      "The quality of furniture from Furnimal is exceptional. My clients always love the pieces I select from this collection.",
    avatar: "https://i.postimg.cc/Y2f4HQxH/POSTIMG.jpg",
  },
  {
    id: "2",
    name: "Michael",
    role: "Home Owner",
    quote:
      "After searching for months, I finally found the perfect dining set at Furnimal. Excellent quality and the customer service was outstanding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Emilyz",
    role: "Architect",
    quote:
      "I appreciate the attention to detail and craftsmanship in every piece. Furnimal has become my go-to for quality furniture.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1288&ixlib=rb-4.0.3",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from our satisfied customers about their experience with our furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-furniture-light-gray p-8 rounded-lg relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-furniture-accent opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                </svg>
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-furniture-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-furniture-gray relative z-10">{testimonial.quote}</p>
              
              <div className="mt-6 flex">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
