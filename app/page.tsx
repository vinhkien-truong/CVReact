// app/page.tsx
import './globals.css'; // Global styles for the CV
import ProfileSection from './components/ProfileSection';
import DetailsSection from './components/DetailsSection';
import LinksSection from './components/LinksSection';
import SkillsSection from './components/SkillsSection';
import LanguagesSection from './components/LanguagesSection';
import ProfileTextSection from './components/ProfileTextSection';
import EmploymentSection from './components/EmploymentSection';
import EducationSection from './components/EducationSection';

export default function Home() {
  return (
    <div className="cv-container">
      <div className="left-column">
        <ProfileSection />
        <DetailsSection />
        <LinksSection />
        <SkillsSection />
        <LanguagesSection />
      </div>

      <div className="right-column">
        <ProfileTextSection />
        <EmploymentSection />
        <EducationSection />
      </div>
    </div>
  );
}