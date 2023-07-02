import React from 'react';
// import styles from './aboutproject.module.css';

function AboutProject() {
  return (
    <div className='container w-full flex justify-center align-center '>
        <div className='heading h-[800px] w-4/5 bg-white text-black rounded-xl m-5'>
            <h1 className='font-semibold text-3xl text-[#A04646] m-4'>About Project</h1>
            <p className=' overflow-hidden px-2 truncate text-lg text-[#404040]'>

<span className='text-black'>Project Title: JusticeIndex (Criminal Database Management System)</span>
<br /><br />
<span className='text-black'>Project Description:</span><br />
The Criminal Database Management System is a web application built using Next.js and MongoDB that aims to streamline the management of criminal records and enhance the efficiency of law enforcement agencies. The system provides a user-friendly interface for authorized personnel to manage, search, and analyze criminal data.
<br /><br />
<span className='text-black'>Features:</span>
<br />

<span className='text-black'>1. User Authentication and Authorization:</span><br />
    The system supports user registration and login functionality, ensuring secure access to authorized personnel only.<br />
    Different user roles such as administrators, law enforcement officers, and analysts can be defined with varying levels of access and privileges.<br />
   
   <span className='text-black'>2. Criminal Data Management:</span><br />
    The system allows authorized users to add, edit, and delete criminal records.<br />
    Each criminal record includes details such as personal information, physical characteristics, criminal history, and associated case files.<br />
    The system supports document storage for uploading and attaching related files, such as mugshots or court documents, to the criminal records.<br />
   
   <span className='text-black'>3. Search and Filtering:</span><br />
    Users can perform advanced search queries to find specific criminals based on various criteria such as name, age, aliases, or offenses committed.<br />
    The system provides filtering options to narrow down the search results based on location, crime severity, or other attributes.<br />
   
   <span className='text-black'>4. Data Privacy and Security:</span><br />
    The application implements robust security measures to protect sensitive data, including encryption of user passwords and secure communication protocols.<br />
    Access controls and permissions are implemented to ensure that only authorized individuals can access and modify the system's data.<br />
   <br />
   <span className='text-black'>Technology Stack:</span><br />
   <span className='text-black'> Next.js:</span> A React framework for building server-rendered React applications with built-in routing and server-side rendering capabilities.<br />
   <span className='text-black'> MongoDB:</span> A NoSQL database that provides flexibility and scalability for storing and retrieving criminal data efficiently.<br />
   <span className='text-black'> Node.js:</span> A JavaScript runtime environment used for server-side development and backend integration.<br />
   <span className='text-black'> Express.js:</span> A minimal web application framework for Node.js, providing a flexible and straightforward API for handling HTTP requests.<br />

By developing the Criminal Database Management System using Next.js and MongoDB, you will create a powerful and user-friendly application that can efficiently manage criminal records, improve investigations, and contribute to the overall security and safety of society.</p>
        </div>
    </div>
  )
}

export default AboutProject