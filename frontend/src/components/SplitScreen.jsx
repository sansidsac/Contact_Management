import { useEffect, useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { color } from '../colors/color';
import axios from 'axios';
import LeftSideComp from './LeftSideComp';
import RightSideComp from './RightSideComp';

const SplitScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleOpen = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContact(null);
    setIsEditing(false);
  };

  const handleDeleteConfirmOpen = (contact) => {
    setSelectedContact(contact);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirmClose = () => {
    setDeleteConfirmOpen(false);
    setSelectedContact(null);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${selectedContact._id}`);
      setContacts(contacts.filter(contact => contact._id !== selectedContact._id));
      handleDeleteConfirmClose();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsEditing(true);
    setOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/contacts/${selectedContact._id}`, selectedContact);
      setContacts(contacts.map(contact => (contact._id === selectedContact._id ? response.data : contact)));
      handleClose();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact({ ...selectedContact, [name]: value });
  };

  const handleAddContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: color[100],
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <Box sx={{ flex: { xs: '1', md: '3' } }}>
        <LeftSideComp
          contacts={contacts}
          handleOpen={handleOpen}
          handleDeleteConfirmOpen={handleDeleteConfirmOpen}
          handleEdit={handleEdit}
        />
      </Box>
      <Box sx={{ flex: { xs: '1', md: '2' } }}>
        <RightSideComp onAddContact={handleAddContact} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedContact && (
            <>
              {isEditing ? (
                <>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={selectedContact.firstName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={selectedContact.lastName}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <TextField
                    label="Job Title"
                    name="jobTitle"
                    value={selectedContact.jobTitle}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <TextField
                    label="Company"
                    name="company"
                    value={selectedContact.company}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={selectedContact.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={selectedContact.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2, '& .MuiInputLabel-root': { color: color[400] }, '& .MuiInputBase-input': { color: color[400] } }}
                  />
                  <Button onClick={handleUpdate} variant="contained" sx={{ bgcolor: color[100], color: color[400] }}>
                    Update
                  </Button>
                </>
              ) : (
                <>
                  <Typography id="contact-modal-title" variant="h6" component="h2" sx={{ color: color[400] }}>
                    {selectedContact.firstName} {selectedContact.lastName}
                  </Typography>
                  <Typography id="contact-modal-description" sx={{ mt: 2, color: color[400] }}>
                    Job Title: {selectedContact.jobTitle}
                  </Typography>
                  <Typography sx={{ color: color[400] }}>
                    Company: {selectedContact.company}
                  </Typography>
                  <Typography sx={{ color: color[400] }}>
                    Email: {selectedContact.email}
                  </Typography>
                  <Typography sx={{ color: color[400] }}>
                    Phone Number: {selectedContact.phoneNumber}
                  </Typography>
                </>
              )}
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={deleteConfirmOpen}
        onClose={handleDeleteConfirmClose}
        aria-labelledby="delete-confirm-modal-title"
        aria-describedby="delete-confirm-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 300 }}>
          <Typography id="delete-confirm-modal-title" variant="h6" component="h2" sx={{ color: color[400] }}>
            Confirm Deletion
          </Typography>
          <Typography id="delete-confirm-modal-description" sx={{ mt: 2, color: color[400] }}>
            Are you sure you want to delete this contact?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button onClick={handleDeleteConfirmClose} variant="contained" sx={{ bgcolor: color[100], color: color[400] }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="contained" sx={{ bgcolor: color[100], color: color[400] }}>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default SplitScreen;