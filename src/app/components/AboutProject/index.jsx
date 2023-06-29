import React from 'react';
// import styles from './aboutproject.module.css';

function AboutProject() {
  return (
    <div className='container  flex justify-center align-middle '>
        <div className='heading h-[900px] w-10/12 bg-white text-black rounded-xl m-5'>
            <h1 className='font-semibold text-3xl text-[#A04646] my-4'>About Project</h1>
            <p className=' overflow-hidden text-ellipsis truncate text-lg'>

Project Title: Criminal Database Management System
<br />
Project Description:<br />
The Criminal Database Management System is a web application built using Next.js and MongoDB that aims to streamline the management of criminal records and enhance the efficiency of law enforcement agencies. The system provides a user-friendly interface for authorized personnel to manage, search, and analyze criminal data.
<br />
Features:
<br />

1. User Authentication and Authorization:<br />
   - The system supports user registration and login functionality, ensuring secure access to authorized personnel only.<br />
   - Different user roles such as administrators, law enforcement officers, and analysts can be defined with varying levels of access and privileges.<br />
   <br />
2. Criminal Data Management:<br />
   - The system allows authorized users to add, edit, and delete criminal records.<br />
   - Each criminal record includes details such as personal information, physical characteristics, criminal history, and associated case files.<br />
   - The system supports document storage for uploading and attaching related files, such as mugshots or court documents, to the criminal records.<br />
   <br />
3. Search and Filtering:<br />
   - Users can perform advanced search queries to find specific criminals based on various criteria such as name, age, aliases, or offenses committed.<br />
   - The system provides filtering options to narrow down the search results based on location, crime severity, or other attributes.<br />
   <br />
{/* 4. Analytics and Reporting:<br />
   - The system offers statistical analysis tools to generate reports on crime trends, demographic patterns, and other relevant insights.<br />
   - Users can visualize data through charts, graphs, and maps to identify patterns and make informed decisions.<br />
   <br />
5. Integration with External Systems:<br />
   - The system allows integration with external services or databases, such as fingerprint identification systems or facial recognition APIs, to enhance the identification process and match criminals with existing records.<br />
   <br /> */}
4. Data Privacy and Security:<br />
   - The application implements robust security measures to protect sensitive data, including encryption of user passwords and secure communication protocols.<br />
   - Access controls and permissions are implemented to ensure that only authorized individuals can access and modify the system's data.<br />
   <br />
Technology Stack:<br />
- Next.js: A React framework for building server-rendered React applications with built-in routing and server-side rendering capabilities.<br />
- MongoDB: A NoSQL database that provides flexibility and scalability for storing and retrieving criminal data efficiently.<br />
- Node.js: A JavaScript runtime environment used for server-side development and backend integration.<br />
- Express.js: A minimal web application framework for Node.js, providing a flexible and straightforward API for handling HTTP requests.<br />
<br />
By developing the Criminal Database Management System using Next.js and MongoDB, you will create a powerful and user-friendly application that can efficiently manage criminal records, improve investigations, and contribute to the overall security and safety of society.</p>
        </div>
    </div>
  )
}

export default AboutProject