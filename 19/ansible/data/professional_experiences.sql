-- -------------------------------------------------------------
-- TablePlus 6.3.2(586)
--
-- https://tableplus.com/
--
-- Database: 08
-- Generation Time: 2025-03-08 19:41:43.9520
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."professional_experiences";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."professional_experiences" (
    "id" int4,
    "position" text,
    "company" text,
    "start_date" text,
    "end_date" text,
    "location" text,
    "description" text,
    "display_order" int4,
    "created_at" text,
    "updated_at" text
);

INSERT INTO "public"."professional_experiences" ("id", "position", "company", "start_date", "end_date", "location", "description", "display_order", "created_at", "updated_at") VALUES
(1, 'Senior Software Engineer', 'Chime Financial', 'June 2021', '', 'Remote', '[ "Collaborate with the marketing team to enhance user engagement across the Chime website, driving revenue growth through optimized digital experiences", "Troubleshoot and resolve WordPress bugs reported by users, ensuring a seamless and reliable platform experience", "Design and implement new website pages using PHP and JavaScript, incorporating modern, responsive features to improve user satisfaction", "Leverage Advanced Custom Fields to create dynamic, customizable user interfaces, streamlining content management for non-technical teams", "Develop comprehensive cross-departmental documentation to standardize workflows and improve knowledge sharing" ]', 0, '', ''),
(2, 'Software Engineer I', 'Dealer Inspire', 'December 2022', 'March 2024', 'Remote', '[ "Collaborated cross-functionally to deliver impactful documentation projects, resulting in a 20% increase in project efficiency and knowledge sharing", "Conceptualized and executed innovative dealer web pages to elevate user experience and drive sales, increasing page views by 50% and lead conversion rate by 20%", "Arranged a comprehensive code review process for pull requests, emphasizing quality standards and adherence to guidelines, identifying and correcting 200+ coding issues, resulting in a 40% improvement in code quality metrics", "Designed and implemented software using PHP and JavaScript to integrate a third-party AI multilingual translation tool, which boosted dealership website engagement by 15% and reduced departmental development workload by 20%" ]', 1, '', ''),
(3, 'Full-Stack Developer', 'Dealer Inspire', 'October 2019', 'December 2022', 'Naperville, Illinois', '[
  "Engineered a scalable white-label training solution built specifically for internal teams, achieving a 50% average increase in departmental learning engagement",
  "Constructed custom WordPress plugins integrating Google Analytics to guide training decisions, enhancing departmental efficiency by 20%",
  "Architected a series of Python scripts to automate the processing of departmental information, reducing the average weekly workload by 3 hours",
  "Implemented Agile development techniques to the training team, resulting in a 25% enhancement in workflow efficiency",
  "Led a cross-functional collaboration to revamp Training Team brand identity on team websites, aligning design elements and messaging, boosting website traffic by 25% and decreasing bounce rate by 15%",
  "Mentored a junior developer in WordPress web development and server administration, resulting in a 30% boost in coding proficiency",
  "Conceptualized, engineered, and optimized WordPress platforms with bespoke themes and plugins, channeling users towards a training-as-a-service membership model that led to a 100% boost in departmental revenue"
]', 2, '', ''),
(4, 'Systems Support Technician', 'The Mx Group', 'February 2019', 'October 2019', 'Burr Ridge, Illinois', '[
  "Analyzed market trends and conducted cost-benefit analysis for technology purchases, resulting in 15% cost savings and improved efficiency in inventory management",
  "Orchestrated the development and implementation of departmental procedures using Bash, PowerShell, and Python scripts, yielding a 25% enhancement in operational efficiency and a time-saving of 12 hours weekly",
  "Led the creation of a gamified security-training platform with interactive modules and quizzes, achieving a 50% completion rate increase and reducing security vulnerabilities by 20% within 6 months",
  "Developed comprehensive procedural documentation for 20+ internal processes, streamlining onboarding and training time for new employees by 50% and reducing errors by 40%"
]', 3, '', ''),
(5, 'Help Desk Support Specialist', 'Judson University', 'June 2017', 'February 2019', 'Elgin, Illinois', '[
  "Resolved a wide range of technical issues as both level one and two help desk support, resulting in a 40% reduction in average ticket resolution time",
  "Directed hands-on training sessions tailored to diverse user groups, focusing on optimizing university technology utilization; saw a 40% increase in user adoption rates and a 20% reduction in IT support ticket volume",
  "Developed and maintained websites utilizing HTML, CSS, JavaScript, and WordPress; integrated user-friendly features that boosted customer engagement, leading to a 30% increase in online sales and a 15% growth in repeat visitors",
  "Orchestrated the construction, restoration, and maintenance of Mac and Windows computer systems, implementing system upgrades and repairs that led to a 15% increase in system speed and reliability"
]', 4, '', ''),
(6, 'Fifth Grade Teacher', 'John Muir Literacy Academy', 'August 2017', 'June 2022', 'Hoffman Estates, Illinois', '[
  "Taught all subjects in a self-contained classroom, with special emphasis on integrating technology into literacy and the content subjects of social studies and science",
  "Administered and analyzed data from MAP and PARCC tests"
]', 5, '', ''),
(7, 'Fourth Grade Teacher', 'Southbury Elementary School', 'August 2013', 'June 2017', 'Oswego, Illinois', '[
  "Member of the school''s Technology Committee",
  "Installed Apple TVs in every classroom in the building",
  "Gave multiple presentations to staff members about how to integrate iOS and Apple TVs into their classrooms to enhance student learning",
  "Taught all subjects in a self-contained classroom, with special emphasis on integrating technology into literacy and the content subjects of social studies and science",
  "Administered and analyzed data from ISAT, MAP, PARCC, and STAR test"
]', 6, '', '');
