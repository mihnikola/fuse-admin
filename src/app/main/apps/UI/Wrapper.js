import { Container } from '@mui/material';

function Wrapper(props) {
  return (
    <Container sx={{ marginLeft: 0, width: '80%', minWidth: '1020px' }}>{props.children}</Container>
  );
}

export default Wrapper;
