import parse from "html-react-parser";

const SectionTitle2 = ({Title, SubTitle,isCenter=true}) => {
  return (
    <div>
      <h3 className={`${isCenter? "text-center fw-bold mb-2" : "text-start fw-bold mb-2"}`}>{parse(Title)}</h3>
      <h4 className="text-center text-primary cs_fs_30">{parse(SubTitle)}</h4>
    </div>
  );
};

export default SectionTitle2;
