import parse from "html-react-parser";

const SectionTitle = ({Title, SubTitle}) => {
  return (
    <div className="cs_section_heading cs_style_1 cs_mb_30 text-center">
      <h3 className="text-center fw-bold mb-2">
        {parse(Title)} <span className="text-primary"> {parse(SubTitle)}</span>{" "}
      </h3>
    </div>
  );
};

export default SectionTitle;
