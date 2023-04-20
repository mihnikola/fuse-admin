import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import PropTypes from 'prop-types';

const SearchControl = ({ placeholder = 'Search...', onChange, value }) => {
  return (
    <Paper className="flex items-center h-44 w-full px-16 rounded-16 shadow">
      <Input
        placeholder={placeholder}
        disableUnderline
        fullWidth
        inputProps={{
          'aria-label': 'Search',
        }}
        onChange={onChange}
        value={value}
      />
      <FuseSvgIcon color="action">heroicons-outline:search</FuseSvgIcon>
    </Paper>
  );
};

SearchControl.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchControl;