export default function LanguagesSection() {
  const languages = [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'B1' },
    { name: 'Chinese', level: 'A2' }
  ];

  return (
    <div className="section">
      <div className="section-title">Languages</div>
      {languages.map((lang, index) => (
        <div key={index} className="language-item">
          <span className="language-name">{lang.name}</span>
          <span className="language-level">{lang.level}</span>
        </div>
      ))}
    </div>
  );
}