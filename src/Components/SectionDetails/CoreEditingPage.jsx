import AdditionalBenefits from "../Common/AdditionalBenefits";

const benefitsData = [
  {icon: "assets/img/icon/sa-6.svg", text: "Editing certificate"},
  {icon: "assets/img/icon/sa-4.svg", text: "Unlimited Q&A with editors"},
  {icon: "assets/img/icon/sa-7.svg", text: "Journal cover letter"},
];

const CoreEditingPage = () => {
  return (
    <AdditionalBenefits
      title="Core Editing"
      subtitle="Additional Benefits"
      benefits={benefitsData}
    />
  );
};

export default CoreEditingPage;
