
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SplitScreen = ({ children }) => {
  const [left, right] = children;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      <Box sx={{ flex: { xs: '1 1 auto', md: '2 1 auto' } }}>
        {left}
      </Box>
      <Box sx={{ flex: { xs: '1 1 auto', md: '1 1 auto' } }}>
        {right}
      </Box>
    </Box>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplitScreen;