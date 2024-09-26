import PropTypes from 'prop-types';

function Btn(props) {
  return (
    <div>{props.buttonText}</div>
  );
}

export default Btn;

Btn.propTypes = {
  buttonText: PropTypes.string.isRequired, 
};

