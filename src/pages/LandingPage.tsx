import MainLayout from "../layout/MainLayout";
import FaqSection from "../section/FaqSection";
import FooterSection from "../section/FooterSection";
import GettingstartedSection from "../section/GettingstartedSection";
import MainSection from "../section/MainSection";
import OurSection from "../section/OurSection";
import TestimonialsSection from "../section/TestimonialsSection";
import WhyusSection from "../section/WhyusSection";

const LandingPage = () => {
  return (
    <MainLayout>
      <MainSection />
      <OurSection />
      <WhyusSection />
      <TestimonialsSection />
      <GettingstartedSection />
      <FaqSection />
      <FooterSection />
    </MainLayout>
  );
};

export default LandingPage;