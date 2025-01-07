import React, { useState } from 'react';
import './Application.css';

const Application = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    idNumber: '',
    dob: '',
    gender: '',
    subCounty: '',
    ward: '',
    subWard: '',
    village: '',
    contactPhone: '',
    contactEmail: '',
    disabilityStatus: 'No',
    
    // Family Details
    familyStatus: '',
    familyIncome: '',
    guardianName: '',
    guardianOccupation: '',
    guardianPhone: '',
    evidenceFiles: [],
    
    // Institution Details
    educationLevel: '',
    personalStatement: '',
    feeStructure: null,
    feeStatement: null,
    idDocument: null,
    
    // Financial Support
    supportSources: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSupportChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSources = [...formData.supportSources];
    updatedSources[index][name] = value;
    setFormData(prev => ({
      ...prev,
      supportSources: updatedSources
    }));
  };

  const addSupportSource = () => {
    setFormData(prev => ({
      ...prev,
      supportSources: [...prev.supportSources, { source: '', year: '', amount: '' }]
    }));
  };

  const removeSupportSource = (index) => {
    setFormData(prev => ({
      ...prev,
      supportSources: prev.supportSources.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="application-container">
      <h1>Bursary Application Form</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <section className="form-section">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label>Full Names</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>ID/Passport Number</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Sub County</label>
              <input
                type="text"
                name="subCounty"
                value={formData.subCounty}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Ward</label>
              <input
                type="text"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Sub Ward</label>
              <input
                type="text"
                name="subWard"
                value={formData.subWard}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Village</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Person Phone Number</label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Person Email Address</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Disability Status</label>
              <select
                name="disabilityStatus"
                value={formData.disabilityStatus}
                onChange={handleChange}
                required
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="form-section">
            <h2>Family Details</h2>
            <div className="form-group">
              <label>Family Status</label>
              <select
                name="familyStatus"
                value={formData.familyStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Both Parents">Both Parents</option>
                <option value="Single Parent">Single Parent</option>
                <option value="Orphan">Orphan</option>
              </select>
            </div>

            <div className="form-group">
              <label>Family Monthly Income (KES)</label>
              <input
                type="number"
                name="familyIncome"
                value={formData.familyIncome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Guardian's Name</label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Guardian's Occupation</label>
              <input
                type="text"
                name="guardianOccupation"
                value={formData.guardianOccupation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Guardian's Phone Number</label>
              <input
                type="tel"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Evidence Documents</label>
              <input
                type="file"
                name="evidenceFiles"
                onChange={handleChange}
                multiple
                required
              />
              <small>Upload death certificates or sub-chief letter (PDF only)</small>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="form-section">
            <h2>Institution Details</h2>
            <div className="form-group">
              <label>Education Level</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Secondary">Secondary</option>
                <option value="College">College</option>
                <option value="University">University</option>
              </select>
            </div>

            <div className="form-group">
              <label>Personal Statement</label>
              <textarea
                name="personalStatement"
                value={formData.personalStatement}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Fee Structure (PDF)</label>
              <input
                type="file"
                name="feeStructure"
                onChange={handleChange}
                accept=".pdf"
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Fee Statement (PDF)</label>
              <input
                type="file"
                name="feeStatement"
                onChange={handleChange}
                accept=".pdf"
                required
              />
            </div>

            <div className="form-group">
              <label>Upload National ID/School ID/Admission Letter (PDF)</label>
              <input
                type="file"
                name="idDocument"
                onChange={handleChange}
                accept=".pdf"
                required
              />
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="form-section">
            <h2>Financial Support from Other Sources</h2>
            {formData.supportSources.map((source, index) => (
              <div key={index} className="support-source">
                <div className="form-group">
                  <label>Source of Support</label>
                  <input
                    type="text"
                    name="source"
                    value={source.source}
                    onChange={(e) => handleSupportChange(index, e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Year of Support</label>
                  <input
                    type="number"
                    name="year"
                    value={source.year}
                    onChange={(e) => handleSupportChange(index, e)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Amount Awarded (KES)</label>
                  <input
                    type="number"
                    name="amount"
                    value={source.amount}
                    onChange={(e) => handleSupportChange(index, e)}
                    required
                  />
                </div>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeSupportSource(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              className="add-button"
              onClick={addSupportSource}
            >
              Add Another Source
            </button>
          </section>
        )}

        <div className="form-navigation">
          {step > 1 && (
            <button
              type="button"
              className="nav-button"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              className="nav-button"
              onClick={() => setStep(step + 1)}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Application;
