export default function SkillsSection() {
  const skills = [
    'Python', 'Docker','Flask', 'JavaScript', 'jQuery', 'Node.js', 'Express.js', 'Pug', 'HTML5', 'CSS',
    'Api Postman', 'Java', 'Maven', 'JUnit', 'Spring Boot', 'Hibernate', 'Lombok', 'MapStruct', 'Swagger', 'Oracle Database', 'JWT',
    'C#', 'Agile', 'Microsoft sql server', 'Git', 'Svn',  'REST API', 'PostgreSQL'
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