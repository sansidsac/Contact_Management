
import PropTypes from 'prop-types';
import ContactTable from './ContactTable';

const LeftSideComp = ({ contacts, handleEdit, handleDeleteConfirmOpen }) => {
  return (
    <ContactTable
      contacts={contacts}
      handleEdit={handleEdit}
      handleDeleteConfirmOpen={handleDeleteConfirmOpen}
    />
  );
};

LeftSideComp.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDeleteConfirmOpen: PropTypes.func.isRequired,
};

export default LeftSideComp;
