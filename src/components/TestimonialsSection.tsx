import { testimonials } from "../constants";
import TestimonialCard from "./TestimonialCard";
import * as types from "../types/index";

const TestimonialsSection:React.FC = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial:types.ITestimonial, index:number) => (
<TestimonialCard testimonial={testimonial} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;