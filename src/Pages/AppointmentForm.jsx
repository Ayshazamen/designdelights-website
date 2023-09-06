import React, { useState } from 'react';
import "../styles/AppointmentForm.css";
import { auth } from "../firebase.config.js";

const AppointmentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission logic, e.g., send the data to your server or perform any necessary actions.
    console.log('Full Name:', fullName);
    console.log('Contact Number:', contactNumber);
    console.log('Email:', email);
    console.log('Enquiry:', enquiry);

    // Close the form after submission
    toggleForm();
  };

  return (
    <div>
      <button className='appointment_btn' onClick={toggleForm}>Make an Appointment</button>
      {isOpen && (
        <div className="appointment-form">
          <h2>Appointment Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>
            <label>
              Contact Number:
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Enquiry:
              <input
                type="text"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                required
              />
            </label>

            <button type="submit">Book Your Appointment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;



// import React, { useState } from 'react';
// import "../styles/AppointmentForm.css";

// const AppointmentForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [enquiry, setEnquiry] = useState('');
  

//   const toggleForm = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can handle the form submission logic, e.g., send the data to your server or perform any necessary actions.
//     console.log('Full Name:', fullName);
//     console.log('Contact Number:', contactNumber);
//     console.log('Email:', email);
//     console.log('Enquiry:', enquiry);
    

//     // Close the form after submission
//     toggleForm();
//   };

//   return (
//     <div>
//       <button className='appointment_btn' onClick={toggleForm}>Make an Appointment</button>
//       {isOpen && (
//         <div className="appointment-form">
//           <h2>Appointment Form</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Full Name:
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 required
//               />
//             </label>
//             <label>
//               Contact Number:
//               <input
//                 type="tel"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//                 required
//               />
//             </label>
//             <label>
//               Email Address:
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </label>


//             <label>
//               Enquiry:
//               <input
//                 type="text"
//                 value={enquiry}
//                 onChange={(e) => setEnquiry(e.target.value)}
//                 required
//               />
//             </label>
           
           
//             <button type="submit">Book Your Appointment</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentForm;