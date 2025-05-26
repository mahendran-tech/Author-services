// pages/Services.jsx
import ServiceCard from "../Common/ServiceCard";

const Services = () => {
  return (
    <div className="container py-5">
      <ServiceCard
        title="Thesis Editing"
        description="Our editors revise your thesis or dissertation to improve its clarity, readability, and academic value. They correct grammar, punctuation, and spelling errors while improving sentence structure and flow. Additionally, we ensure that your work maintains a formal academic tone, making it more coherent and ready for submission, increasing the chances of approval."
        image="assets/img/thesis-editing.jpg"
        reverse
      />

      <ServiceCard
        title="Proofreading"
        description="Our expert proofreaders thoroughly check your manuscript for grammar, punctuation, and spelling errors, ensuring clarity and consistency throughout. They also review the formatting to ensure it meets journal guidelines, allowing you to submit a polished, professional manuscript that is ready for publication."
        image="assets/img/proofreading.jpg"
        bgColor="rgba(223, 234, 248, 1)"
        textColor="rgba(1, 21, 48, 1)"
      />
    </div>
  );
};

export default Services;
