import { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button, TextField } from '@mui/material';
import { color } from '../colors/color';
import PropTypes from 'prop-types';

const RightSideComp = ({ onAddContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contacts', contact);
      onAddContact(response.data);
      setContact({
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <Box sx={{ bgcolor: color[400], p: 4, borderRadius: 4, boxShadow: 3, m: 4 }}>
      <Typography variant="h6" component="h2" sx={{ color: color[100], mb: 2 }}>
        Add New Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <TextField
          label="Company"
          name="company"
          value={contact.company}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <TextField
          label="Email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[100] }, '& .MuiInputBase-input': { color: color[100] } }}
        />
        <Button type="submit" variant="contained" sx={{ bgcolor: color[100], color: color[400] }}>
          Add Contact
        </Button>
      </form>
    </Box>
  );
};

RightSideComp.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default RightSideComp;