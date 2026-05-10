export default function EducationSection() {
  const educations = [
    {
      title: "Java developer",
      school: 'Hack your future, Brussels',
      date: 'Feb 2026 – Current',
      website: 'Website: https://www.hackyourfuture.be/',
      description: 'Currently enrolled in an intensive Java development program at Hack Your Future, focusing on backend development, object-oriented programming, and software engineering principles, Spring Framework and Maven to enhance my expertise in Java and related technologies.'
    },
    {
      title: 'Front end developer',
      school: 'Hack your future, Brussels',
      date: 'Sept 2025 – Jan 2026',
      website: 'Website: https://www.hackyourfuture.be/',
      description: 'Completed an intensive front-end development program at Hack Your Future, mastering HTML, CSS, GitHub and JavaScript to build responsive and user-friendly web applications.'
    },
    {
      title: 'Bachelor\'s Degree in Computer Science',
      school: 'Institut Paul Lambin, Brussels',
      date: '2013 – 2018',
      website: 'Website: https://www.vinci.be/fr/formations/informatique-developpement-applications'
    }
  ];

  return (
    <div className="right-section">
      <div className="right-title">Education</div>
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
            <div className="edu-header">
                <span className="edu-title">{edu.title}</span>
                <span className="edu-date">{edu.date}</span>
            </div>
          <div className="edu-school">{edu.school}</div>
          <div className="edu-website">{edu.website}</div>
          <div className="edu-description">{edu.description}</div>
        </div>
      ))}
    </div>
  );
}