const RoundedCard = ({
  title,
  description,
  bgColor = "bg-light",
  radius = "br-left",
  textcolor,
  headcolor,
}) => {
  return (
    <>
      <div
        className={` ${bgColor} ${radius} rounded-card text-dark d-flex justify-content-between align-items-center `}>
        <div>
          <h4 className="fw-bold cs_fs_30" style={{color: headcolor}}>
            {title}
          </h4>
          <p
            className={`${radius === "br-left" ? "mb-3" : "mb-5"}`}
            style={{color: textcolor}}>
            {description}
          </p>
          <div
            className={` ${
              radius === "br-left"
                ? "justify-content-end"
                : "justify-content-start"
            }  d-flex my-auto`}>
            <button className="btn btn-pink">View Details ➜</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundedCard;
