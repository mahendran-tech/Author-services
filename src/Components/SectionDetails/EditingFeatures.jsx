

const features = [
  {
    title: "Exclusive Editing",
    description:
      "Ideal for high-impact journal submissions, our Exclusive Editing service provides in-depth manuscript refinement by a subject-matter expert...",
    image: "/images/exclusive-editing.jpg",
    bgClass: "bg-light-pink",
    imageClass: "feature-img-left",
    reverse: false,
  },
  {
    title: "Research Editing",
    description:
      "Our Research Editing service offers in-depth academic support with a strong focus on pre-submission peer review...",
    image: "/images/research-editing.jpg",
    bgClass: "bg-light-bluegreen",
    imageClass: "feature-img-right",
    reverse: true,
  },
  {
    title: "Thesis Editing",
    description:
      "Get your thesis or dissertation professionally edited by our expert team. We enhance writing structure, grammar...",
    image: "/images/thesis-editing.jpg",
    bgClass: "bg-light-blue",
    imageClass: "feature-img-left",
    reverse: false,
  },
];

const EditingFeatures = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary fw-bold">
        Features for Researchers
      </h2>

      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`row align-items-center mb-5 position-relative rounded-4 p-4 overflow-hidden ${
            feature.bgClass
          } ${feature.reverse ? "flex-md-row-reverse" : ""}`}>
          <div className="col-md-6">
            <img
              src={feature.image}
              className={`img-fluid rounded-3 ${feature.imageClass}`}
              alt={feature.title}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="btn btn-pink">View Details ➜</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditingFeatures;
