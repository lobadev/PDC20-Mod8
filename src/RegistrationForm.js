import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [activeTab, setActiveTab] = useState('personal');
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', dob: '', gender: '' });
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '', address: '', city: '' });
  const [academicInfo, setAcademicInfo] = useState({ studentId: '', program: '', yearLevel: '', gpa: '' });
  const [additionalDetails, setAdditionalDetails] = useState({ hobbies: '', skills: '', notes: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!personalInfo.firstName) newErrors.firstName = 'First Name is required';
    if (!contactInfo.email) newErrors.email = 'Email is required';
    if (!academicInfo.studentId) newErrors.studentId = 'Student ID is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (section, field, value) => {
    const setState = {
      personal: setPersonalInfo,
      contact: setContactInfo,
      academic: setAcademicInfo,
      additional: setAdditionalDetails,
    }[section];
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = {
        Personal: personalInfo,
        Contact: contactInfo,
        Academic: academicInfo,
        Additional: additionalDetails,
      };
      // Convert form data to a string format
      const formattedData = `
        Personal Information:
        First Name: ${formData.Personal.firstName}
        Last Name: ${formData.Personal.lastName}
        Date of Birth: ${formData.Personal.dob}
        Gender: ${formData.Personal.gender}

        Contact Information:
        Email: ${formData.Contact.email}
        Phone: ${formData.Contact.phone}
        Address: ${formData.Contact.address}
        City: ${formData.Contact.city}

        Academic Information:
        Student ID: ${formData.Academic.studentId}
        Program: ${formData.Academic.program}
        Year Level: ${formData.Academic.yearLevel}
        GPA: ${formData.Academic.gpa}

        Additional Details:
        Hobbies: ${formData.Additional.hobbies}
        Skills: ${formData.Additional.skills}
        Other Notes: ${formData.Additional.notes}
      `;
      // Display the formatted data in an alert
      alert(formattedData);
    }
  };

  return (
    <div className="registration-form">
      <h2 className="form-title">Registration Form</h2>
      <div className="tabs">
        <div onClick={() => setActiveTab('personal')} className={`tab ${activeTab === 'personal' ? 'active' : ''}`}>Personal Information</div>
        <div onClick={() => setActiveTab('contact')} className={`tab ${activeTab === 'contact' ? 'active' : ''}`}>Contact Information</div>
        <div onClick={() => setActiveTab('academic')} className={`tab ${activeTab === 'academic' ? 'active' : ''}`}>Academic Information</div>
        <div onClick={() => setActiveTab('additional')} className={`tab ${activeTab === 'additional' ? 'active' : ''}`}>Additional Details</div>
      </div>

      <div className="form-section">
        {activeTab === 'personal' && (
          <div>
            <label>
              First Name
              <input
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => handleChange('personal', 'firstName', e.target.value)}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <small className="error-text">{errors.firstName}</small>}
            </label>
            <label>
              Last Name
              <input
                type="text"
                value={personalInfo.lastName}
                onChange={(e) => handleChange('personal', 'lastName', e.target.value)}
              />
            </label>
            <label>
              Date of Birth
              <input
                type="date"
                value={personalInfo.dob}
                onChange={(e) => handleChange('personal', 'dob', e.target.value)}
              />
            </label>
            <label>
              Gender
              <input
                type="text"
                value={personalInfo.gender}
                onChange={(e) => handleChange('personal', 'gender', e.target.value)}
              />
            </label>
          </div>
        )}
        {activeTab === 'contact' && (
          <div>
            <label>
              Email
              <input
                type="email"
                value={contactInfo.email}
                onChange={(e) => handleChange('contact', 'email', e.target.value)}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </label>
            <label>
              Phone Number
              <input
                type="text"
                value={contactInfo.phone}
                onChange={(e) => handleChange('contact', 'phone', e.target.value)}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                value={contactInfo.address}
                onChange={(e) => handleChange('contact', 'address', e.target.value)}
              />
            </label>
            <label>
              City
              <input
                type="text"
                value={contactInfo.city}
                onChange={(e) => handleChange('contact', 'city', e.target.value)}
              />
            </label>
          </div>
        )}
        {activeTab === 'academic' && (
          <div>
            <label>
              Student ID
              <input
                type="text"
                value={academicInfo.studentId}
                onChange={(e) => handleChange('academic', 'studentId', e.target.value)}
                className={errors.studentId ? 'error' : ''}
              />
              {errors.studentId && <small className="error-text">{errors.studentId}</small>}
            </label>
            <label>
              Program
              <input
                type="text"
                value={academicInfo.program}
                onChange={(e) => handleChange('academic', 'program', e.target.value)}
              />
            </label>
            <label>
              Year Level
              <input
                type="text"
                value={academicInfo.yearLevel}
                onChange={(e) => handleChange('academic', 'yearLevel', e.target.value)}
              />
            </label>
            <label>
              GPA
              <input
                type="number"
                value={academicInfo.gpa}
                onChange={(e) => handleChange('academic', 'gpa', e.target.value)}
              />
            </label>
          </div>
        )}
        {activeTab === 'additional' && (
          <div>
            <label>
              Hobbies
              <input
                type="text"
                value={additionalDetails.hobbies}
                onChange={(e) => handleChange('additional', 'hobbies', e.target.value)}
              />
            </label>
            <label>
              Skills
              <input
                type="text"
                value={additionalDetails.skills}
                onChange={(e) => handleChange('additional', 'skills', e.target.value)}
              />
            </label>
            <label>
              Other Notes
              <textarea
                value={additionalDetails.notes}
                onChange={(e) => handleChange('additional', 'notes', e.target.value)}
              ></textarea>
            </label>
          </div>
        )}
      </div>

      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
}

export default RegistrationForm;
