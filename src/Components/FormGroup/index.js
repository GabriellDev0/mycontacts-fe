import Proptypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: Proptypes.node.isRequired,
  error: Proptypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
