export default function SkillsSection() {
  const skills = [
    'JavaScript', 'jQuery', 'Node.js', 'Express.js', 'Pug', 'HTML5', 'CSS',
    'Api Postman', 'Java', 'Oracle Database', 'C#', 'Agile', 'Microsoft sql server', 'Git', 'Svn'
  ];

  return (
    <div className="section">
      <div className="section-title">Skills</div>
      <div className="skills-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}