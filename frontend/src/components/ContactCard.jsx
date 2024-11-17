import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { color } from '../colors/color';
import PropTypes from 'prop-types';

const ContactCard = ({ photo, firstName, lastName, jobTitle, company, email, phoneNumber, onDelete, onEdit }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, bgcolor: color[100], p: 2, borderRadius: 4, m:6, width: 'calc(80% - 32px)', height: { xs: 'auto', md: 100 } }}>
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', md: 100 }, height: { xs: 'auto', md: 100 }, bgcolor: color[100], borderRadius: 2 }}
        image={photo}
        alt={`${firstName} ${lastName}`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 } }}>
        <CardContent sx={{ flex: '1 0 auto', p: 0 }}>
          <Typography component="div" variant="h6" sx={{ color: color[400] }}>
            {firstName} {lastName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ color: color[400] }}>
            {jobTitle}, {company}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div" sx={{ color: color[400] }}>
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div" sx={{ color: color[400] }}>
            {phoneNumber}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 0, md: 2 }, mt: { xs: 2, md: 0 }, justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <IconButton aria-label="edit" sx={{ color: color[200] }} onClick={onEdit}>
          <Edit />
        </IconButton>
        <IconButton aria-label="delete" sx={{ color: color[200] }} onClick={onDelete}>
          <Delete />
        </IconButton>
      </Box>
    </Card>
  );
};

ContactCard.propTypes = {
  photo: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ContactCard;