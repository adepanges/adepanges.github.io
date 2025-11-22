import Navbar from "../components/Navbar";
import "./Resume.css";
import React from "react";

interface ResumeData {
  personal: {
    name: string;
    title: string;
    location: string;
    initials: string[];
  };
  contact: {
    linkedin: { label: string; url: string; display: string };
    email: { label: string; address: string };
    phone: { label: string; number: string };
  };
  summary: string;
  education: Array<{
    institution: string;
    period: string;
    details: Array<{ label?: string; value: string }>;
  }>;
  skills: string[];
  experience: Array<{
    role: string;
    company: string;
    period: string;
    points: string[];
  }>;
}

const resumeData: ResumeData = {
  personal: {
    name: "Ade Pangestu",
    title:
      "Full-Stack Developer | 9+ Years | Node.js, TypeScript, PHP | Cloud & AI Explorer",
    location: "Purworejo Regency, Central Java, Indonesia",
    initials: ["A", "P"],
  },
  contact: {
    linkedin: {
      label: "LinkedIn:",
      url: "http://www.linkedin.com/in/adepanges",
      display: "linkedin.com/in/adepanges",
    },
    email: {
      label: "Email:",
      address: "adepanges@gmail.com",
    },
    phone: {
      label: "Phone:",
      number: "+6282322254063",
    },
  },
  summary: `Full-Stack Software Engineer
Dynamic developer with a proven track record of building scalable web applications, optimizing systems, and delivering cloud-native solutions across industries like e-commerce, telecom, and SaaS. Proficient in Node.js, TypeScript, PHP frameworks (Laravel/CodeIgniter), and modern frontend tools (Vue.js, React), with deep expertise in database design (PostgreSQL, MongoDB) and performance tuning.
Currently expanding into Cloud Operations (AWS) and integrating AI-driven features into production systems, such as automating workflows and enhancing user personalization. Passionate about bridging cutting-edge tools like machine learning with robust engineering practices, while maintaining a focus on clean code, Agile methodologies, and end-to-end ownership of projects.`,
  education: [
    {
      institution: "SMK Negeri 1 Bawang",
      period: "2012 – 2015 | High School Diploma",
      details: [{ label: "Major:", value: "Software Engineering" }],
    },
  ],
  skills: [
    "Problem Solving",
    "Server Side",
    "Design Patterns",
    "Node.js",
    "TypeScript",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "Vue.js",
    "React",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "AI Integration",
    "Agile Methodologies",
    "CI/CD",
    "Pug",
    "KnockoutJS",
    "CoffeeScript",
    "Passport.js",
    "SQL Server",
    "Test-Driven Development (TDD)",
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Mitrais",
      period: "March 2021 – Present",
      points: [
        "Develop and maintain scalable web applications for client using Node.js, TypeScript, and PostgreSQL/SQL Server, delivering high-performance solutions for real-time collaboration and data visualization.",
        "Optimize application performance through database indexing, query tuning, and efficient worker flow design, reducing latency and improving user experience for enterprise clients.",
        "Implement unit testing and code quality checks using SonarQube and Git, ensuring robust, maintainable codebases aligned with CI/CD pipelines and Agile (Scrum) workflows.",
        "Modernize frontend components using Pug, KnockoutJS, and CoffeeScript, enhancing UI responsiveness and cross-browser compatibility for seamless user interactions.",
        "Design secure authentication systems with Passport.js and integrate AWS cloud services to support scalable infrastructure and future-proof client solutions.",
        "Collaborate directly with client stakeholders to translate business requirements into technical features, prioritizing performance, security, and scalability.",
        "Proactively upskill in AWS (e.g., EC2, S3, Lambda) to drive cloud-native development and cost-effective architecture improvements.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Sociolla",
      period: "January 2019 – February 2021",
      points: [
        "Developed and maintained Sociolla’s e-commerce platform using Express.js (Node.js) for backend logic and Vue.js for frontend interfaces, ensuring cohesive integration and dynamic user experiences.",
        "Designed and implemented microservices architecture to modernize legacy systems, enhancing scalability and maintainability of the platform.",
        "Integrated Message Queue (MQ) systems to efficiently manage asynchronous workflows, such as order processing and inventory synchronization.",
        "Built specialized background workers to automate repetitive tasks, improving system efficiency and reducing manual operational overhead.",
        "Optimized database interactions using MySQL for transactional data and MongoDB for flexible document storage, ensuring robust data management and retrieval.",
        "Collaborated with cross-functional teams to adopt CI/CD pipelines, streamlining deployment processes and ensuring consistent delivery of new features.",
        "Contributed to code quality and maintainability by enforcing best practices in asynchronous/synchronous code management and modular API design.",
        "Key Strengths:",
        "Technical Expertise: Express.js, Node.js, Vue.js, Microservices, Message Queues, MySQL/MongoDB, CI/CD.",
        "Architectural Contributions: Modernized platform architecture to support business growth and technical agility.",
      ],
    },
    {
      role: "Back End Developer",
      company: "Sociolla",
      period: "August 2018 – December 2018",
      points: [
        "Designed and optimized high-performance RESTful APIs using Lumen (Laravel), supporting seamless integrations for Sociolla’s beauty e-commerce platform and improving response times for 500k+ monthly users.",
        "Resolved critical backend bugs and enhanced API reliability, ensuring 99.9% uptime for core features like product inventory management and user authentication.",
        "Collaborated with frontend and product teams to refine API endpoints, aligning technical implementations with business requirements for scalability and user experience.",
        "Implemented caching strategies and database query optimizations (MySQL/Redis), reducing API latency by 20% and supporting high-traffic demands during peak sales periods.",
        "Contributed to Agile workflows, delivering iterative improvements to backend systems while adhering to CI/CD practices and version control (Git).",
        "Key Strengths:",
        "Technical Skills: Lumen/Laravel, RESTful API Development, MySQL/Redis, Performance Optimization, Bug Resolution.",
        "Industry Context: E-commerce backend systems for a leading Southeast Asian beauty platform.",
        "Scalability Focus: Built APIs to handle high traffic and complex business logic.",
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "PT. Dermeva Kosmetik Indonesia",
      period: "Feb 2018 – Jul 2018 · 6 mos",
      points: [
        "Designed and maintained full-stack web solutions to optimize customer traffic management for a cosmetics e-commerce platform, ensuring seamless data flow and transaction processing for thousands of daily users.",
        "Engineered HTTP postback integrations with third-party sales platforms, enabling real-time data synchronization and error-free transaction handling, directly supporting partner collaboration and revenue growth.",
        "Spearheaded the development of a custom CRM system to centralize customer data, improving segmentation, engagement strategies, and sales team efficiency across the organization.",
        "Built scalable backend architectures (PHP/MySQL) and responsive frontend interfaces to streamline user journeys, reducing latency and enhancing the customer experience.",
        "Collaborated with marketing and sales teams to align technical solutions with business goals, contributing to data-driven decision-making in customer acquisition and retention.",
        "Key Strengths:",
        "Technical Skills: Full-Stack Development, CRM Systems, API Integrations, PHP, MySQL, Data Flow Optimization.",
        "Industry Impact: Delivered tailored solutions for the cosmetics sector, focusing on scalability and customer engagement.",
        "Collaboration: Cross-functional teamwork with non-technical stakeholders to drive sales and operational efficiency.",
      ],
    },
    {
      role: "Backend PHP Developer",
      company: "Klik Digital Sinergi",
      period: "Mar 2017 – Feb 2018",
      points: [
        "Engineered and maintained backend systems for telecommunications clients (H3i, Axis) using PHP legacy frameworks, ensuring seamless integration with Tibco middleware to streamline data exchange and support critical business workflows.",
        "Enhanced On Device Portals (e.g., myAxisnet, Bima 3) by developing new features and resolving complex bugs, improving platform stability and user engagement for over 1 million subscribers.",
        "Collaborated with cross-functional teams to translate client requirements into scalable backend solutions, aligning development efforts with Agile workflows and strict deadlines.",
        "Integrated RESTful/SOAP APIs to connect frontend interfaces with backend services, optimizing data flow and system responsiveness for high-traffic telecom platforms.",
        "Modernized legacy PHP codebases to improve maintainability, reducing technical debt and accelerating future development cycles.",
        "Contributed to system security and performance by troubleshooting middleware interactions and refining database queries for Oracle and PostgreSQL environments.",
        "Key Strengths:",
        "Technical Expertise: PHP, Tibco Middleware, RESTful/SOAP APIs, Legacy Systems, Oracle/PostgreSQL.",
        "Industry Focus: Telecommunications solutions for high-volume platforms like H3i and Axis.",
        "Problem-Solving: Delivered bug-free features and optimized legacy systems under tight deadlines.",
      ],
    },
    {
      role: "Web Software Developer",
      company: "PT. TRASPAC Makmur Sejahtera",
      period: "May 2015 – Feb 2017",
      points: [
        "Developed and maintained custom web applications using CodeIgniter (PHP) and ExtJS (Sencha) frameworks, ensuring seamless integration with client systems and databases (Oracle, PostgreSQL, MySQL).",
        "Collaborated with cross-functional teams to translate client requirements into scalable, user-centric solutions, adhering to Agile methodologies and strict project timelines.",
        "Engineered secure authentication systems using LDAP and biometric technologies (e.g., Machine Fingerprint), enhancing data security and user verification processes.",
        "Optimized UI/UX design by leveraging ExtJS to build responsive, high-performance interfaces tailored to client workflows and business needs.",
        "Contributed to full-stack development projects, including database architecture, API integrations, and troubleshooting, ensuring robust and maintainable codebases.",
        "Gained hands-on experience in troubleshooting and debugging complex systems, improving application stability and performance across diverse client environments.",
        "Key Strengths:",
        "Technical Skills: CodeIgniter (PHP), ExtJS, Oracle/PostgreSQL/MySQL, LDAP, RESTful APIs, Agile Development.",
        "Problem-Solving: Delivered tailored solutions for clients in diverse industries, balancing technical constraints with business objectives.",
        "Collaboration: Worked closely with clients and internal teams to align development outcomes with strategic goals.",
      ],
    },
    
  ],
};

const Resume: React.FC = () => {
  return (
    <main className="font-jost hyphens-manual">
      <Navbar />
      {/* Page */}
      <section className="p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-0 print:p-0 xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter print:w-full print:h-auto">
        {/* Name */}
        <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300 break-inside-avoid">
          <section className="block break-inside-avoid">
            <h1 className="mb-0 text-5xl font-bold text-gray-700 break-inside-avoid">
              {resumeData.personal.name}
            </h1>
            {/* Job Title */}
            <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
              {resumeData.personal.title}
            </h2>
            {/* Location */}
            <h3 className="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
              {resumeData.personal.location}
            </h3>
          </section>
          {/* Initials Block */}
          <section
            className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black"
            style={{ paddingBottom: "1.5rem", paddingTop: "1.5rem" }}
          >
            {resumeData.personal.initials.map((initial, index) => (
              <section key={index} className="text-center initial">
                {initial}
              </section>
            ))}
          </section>
        </header>

        {/* Column */}
        <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
          <section className="flex-col">
            {/* Contact Information */}
            <section className="pb-2 mt-4 mb-0 first:mt-0">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                  <ul className="pr-7 list-inside break-inside-avoid">
                    <li className="mt-1 leading-normal text-black text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:text-black print:">
                      <a
                        href={resumeData.contact.linkedin.url}
                        className="group"
                      >
                        <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                          {resumeData.contact.linkedin.label}
                        </span>
                        {resumeData.contact.linkedin.display}
                        <span className="inline-block font-normal text-black text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:text-black">
                      <a
                        href={`mailto:${resumeData.contact.email.address}`}
                        className="group"
                      >
                        <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                          {resumeData.contact.email.label}
                        </span>
                        {resumeData.contact.email.address}
                        <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                          ↗
                        </span>
                      </a>
                    </li>
                    <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:text-black">
                      <a href={`tel:${resumeData.contact.phone.number}`}>
                        <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                          {resumeData.contact.phone.label}
                        </span>
                        {resumeData.contact.phone.number}
                      </a>
                    </li>
                  </ul>
                </section>
              </section>
            </section>
            {/* Summary */}
            <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
                  SUMMARY
                </h2>

                <section className="mb-2 break-inside-avoid print:break-inside-avoid">
                  <p className="mt-2 leading-normal text-gray-700 text-md break-inside-avoid">
                    {resumeData.summary}
                  </p>
                </section>
              </section>
            </section>
            {/* Education */}
            <section className="pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                  EDUCATION
                </h2>
                {resumeData.education.map((edu, index) => (
                  <section
                    key={index}
                    className={`mt-2 ${
                      index < resumeData.education.length - 1
                        ? "border-b-2"
                        : ""
                    } break-inside-avoid`}
                  >
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {edu.institution}
                      </h3>
                      <p className="leading-normal text-gray-500 text-md">
                        {edu.period}
                      </p>
                    </header>
                    <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                      {edu.details.map((detail, i) => (
                        <li key={i}>
                          {detail.label && (
                            <span className="font-semibold text-md">
                              {detail.label}{" "}
                            </span>
                          )}
                          {detail.value}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </section>
            </section>

            {/* Skills */}
            <section className="pb-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                  SKILLS
                </h2>
                <section className="mb-0 break-inside-avoid">
                  <section className="mt-1 last:pb-1">
                    <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6 break-inside-avoid">
                      {resumeData.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset break-inside-avoid"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </section>
                </section>
              </section>
            </section>

            {/* Experience */}
            <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2 className="mb-2 text-xl font-black tracking-widest text-gray-800 print:font-normal">
                  EXPERIENCE
                </h2>
                {resumeData.experience.map((exp, index) => (
                  <section
                    key={index}
                    className={`mb-2 ${
                      index < resumeData.experience.length - 1
                        ? "border-b-2"
                        : "border-b-0"
                    } border-gray-300 break-inside-avoid`}
                  >
                    <header>
                      <h3 className="font-semibold text-gray-800 text-md leading-snugish">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-gray-500 leading-snugish">
                        {exp.period} | {exp.company}
                      </p>
                    </header>
                    <ul className="pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish break-inside-avoid">
                      {exp.points.map((point, i) => (
                        <li key={i} className="break-inside-avoid">
                          <span className="text-gray-500 transform -translate-y-px select-none print:text-black">
                            &rsaquo;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Resume;
