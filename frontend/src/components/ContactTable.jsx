import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TableSortLabel, IconButton, Paper, Modal, Box, Typography, Button
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { color } from '../colors/color';

const ContactTable = ({ contacts, handleEdit, handleDeleteConfirmOpen }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [selectedContact, setSelectedContact] = useState(null);
  const [open, setOpen] = useState(false);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedContact(null);
  };

  const sortedContacts = contacts.sort((a, b) => {
    const aValue = a[orderBy] || '';
    const bValue = b[orderBy] || '';
    return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: color[100],
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  return (
    <>
      <Paper sx={{ width: '90%', m: 4, marginRight: 1, bgcolor: color[400], borderRadius: 4 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: color[100], borderBottom: `1px solid ${color[300]}`, '& .MuiTableSortLabel-root:hover': { backgroundColor: 'transparent', color: color[100] }, '& .MuiTableSortLabel-root.Mui-active': { color: color[100] }, '& .MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon': { color: color[100] } }}>
                  <TableSortLabel
                    active={orderBy === 'firstName'}
                    direction={orderBy === 'firstName' ? order : 'asc'}
                    onClick={() => handleRequestSort('firstName')}
                    sx={{ '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}
                  >
                    <Typography variant="h6">Name</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: color[100], borderBottom: `1px solid ${color[300]}`, '& .MuiTableSortLabel-root:hover': { backgroundColor: 'transparent', color: color[100] }, '& .MuiTableSortLabel-root.Mui-active': { color: color[100] }, '& .MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon': { color: color[100] } }}>
                  <TableSortLabel
                    active={orderBy === 'company'}
                    direction={orderBy === 'company' ? order : 'asc'}
                    onClick={() => handleRequestSort('company')}
                    sx={{ '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}
                  >
                    <Typography variant="h6">Company</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: color[100], borderBottom: `1px solid ${color[300]}`, '& .MuiTableSortLabel-root:hover': { backgroundColor: 'transparent', color: color[100] }, '& .MuiTableSortLabel-root.Mui-active': { color: color[100] }, '& .MuiTableSortLabel-root.Mui-active .MuiTableSortLabel-icon': { color: color[100] } }}>
                  <TableSortLabel
                    active={orderBy === 'jobTitle'}
                    direction={orderBy === 'jobTitle' ? order : 'asc'}
                    onClick={() => handleRequestSort('jobTitle')}
                    sx={{ '&:hover': { backgroundColor: 'transparent' }, '&:focus': { backgroundColor: 'transparent' } }}
                  >
                    <Typography variant="h6">Job Title</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ borderBottom: `1px solid ${color[300]}` }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
                <TableRow key={contact._id} sx={{ '&:nth-of-type(odd)': { bgcolor: color[50] }, cursor: 'pointer', height: 48, borderBottom: `1px solid ${color[300]}` }} onClick={() => handleRowClick(contact)}>
                  <TableCell sx={{ color: color[100] }}>{`${contact.firstName || ''} ${contact.lastName || ''}`}</TableCell>
                  <TableCell sx={{ color: color[100] }}>{contact.company || ''}</TableCell>
                  <TableCell sx={{ color: color[100] }}>{contact.jobTitle || ''}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit" sx={{ color: color[100] }} onClick={(e) => { e.stopPropagation(); handleEdit(contact); }}>
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="delete" sx={{ color: color[100] }} onClick={(e) => { e.stopPropagation(); handleDeleteConfirmOpen(contact); }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 7, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: color[100] }}
        />
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box sx={modalStyle}>
          {selectedContact && (
            <>
              <Typography id="contact-modal-title" variant="h6" component="h2" sx={{ color: color[400], mb: 2 }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="contained" sx={{ bgcolor: color[400], color: color[100] }} onClick={() => handleEdit(selectedContact)}>
                  Edit
                </Button>
                <Button variant="contained" sx={{ bgcolor: color[400], color: color[100] }} onClick={() => handleDeleteConfirmOpen(selectedContact)}>
                  Delete
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteConfirmOpen: PropTypes.func.isRequired,
};

export default ContactTable;