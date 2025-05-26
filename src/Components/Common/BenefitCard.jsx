// components/BenefitCard.jsx
const BenefitCard = ({icon, title, description}) => {
  return (
    <div className="text-center px-3 py-4 h-100">
      <div
        className="d-inline-flex justify-content-center align-items-center rounded-3 mb-3"
        style={{
          width: "60px",
          height: "60px",
        }}>
        <img src={icon} alt="" />
      </div>
      <h6 className="fw-bold mb-3">{title}</h6>
      <p className="text-muted mb-0 " style={{color: "rgba(97, 109, 128, 1)"}}>
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
