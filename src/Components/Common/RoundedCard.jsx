import { Link } from "react-router-dom";

const RoundedCard = ({
  title,
  description,
  bgColor = "bg-light",
  radius = "br-left",
  textcolor,
  headcolor,
  btnurl,
}) => {
  return (
    <>
      <div
        className={` ${bgColor} ${radius} rounded-card text-dark d-flex justify-content-between align-items-center `}
      >
        <div>
          <h4 className="fw-bold cs_fs_30" style={{ color: headcolor }}>
            {title}
          </h4>
          <p
            className={`${radius === "br-left" ? "mb-3" : "mb-4"}`}
            style={{ color: textcolor }}
          >
            {description}
          </p>
          <div
            className={` ${
              radius === "br-left"
                ? "justify-content-end"
                : "justify-content-start"
            }  d-flex my-auto`}
          >
            <Link
              to={btnurl}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn btn-pink"
            >
              View Details ➜
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundedCard;
