export default function EmploymentSection() {
  const jobs = [
    {
      title: 'Fullstack Web Developer',
      company: 'Efficy, Brussels',
      date: 'October 2020 - June 2025',
      description: [
        'Developed and customized CRM solutions using <b>JavaScript</b> and <b>Microsoft SQL Server</b>, adapting the platform to meet specific client business requirements.',
        'Integrated third-party services such as <b>Google Maps API</b> and <b>Mailchimp</b>, enhancing client marketing automation and geolocation features.',
        'Designed and implemented a custom website template for Colliers, including dynamic mapping functionality.',
        'Implemented and maintained Mailchimp integration for <b>Ligues des familles</b>, improving email communication workflows.',
        'Maintained and enhanced an existing <b>Twikey</b> payment integration for <b>Ligues des familles</b>, ensuring reliable subscription management and payment processing.',
        'Developed a process automation runner and invoicing workflow system for <b>APAQ-W</b>, improving operational efficiency and billing automation.',
        'Built dynamic product tree structures to display hierarchical product and sub-product relationships within CRM interfaces.',
        'Optimized and maintained CRM databases, improving query performance and ensuring data integrity.',
        'Provided technical troubleshooting and client support, resolving complex issues and ensuring system reliability.'
      ]
    },
    {
      title: 'Founder',
      company: 'Mirai Digital Solution, Brussels',
      date: '2019',
      description: [
        'Created web-based startup projects using Node.js and JavaScript'
      ]
    },
    {
      title: 'Internship',
      company: 'Yp5 Software, Brusselss',
      date: '2018',
      description: [
        'Developed user-friendly web interfaces and contributed to project delivery'
      ]
    }    
  ];

  return (
    <div className="right-section">
      <div className="right-title">Work Experience</div>
      {jobs.map((job, index) => (
        <div key={index} className="job">
            <div className="job-header">
                <span className="job-title">{job.title}</span>
                <span className="job-date">{job.date}</span>
            </div>
          <div className="job-company">{job.company}</div>
          <ul className="job-description">
            {job.description.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}