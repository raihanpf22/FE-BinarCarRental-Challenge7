import MainLayout from "../layout/MainLayout";
import FindCarSection from "../section/FindCarSection";
import FooterSection from "../section/FooterSection";
import MainSection from "../section/MainSection";

const FindCarPage = () => {
  return (
    <MainLayout>
      <MainSection />
      <FindCarSection />
      <FooterSection />
    </MainLayout>
  );
};

export default FindCarPage;
