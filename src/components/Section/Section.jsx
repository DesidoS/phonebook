import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contact/selectors';
import { Loader } from '../Loader';

const Section = ({ header, title, children }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {header && <h1>{header}</h1>}
      {title && (isLoading && !error ? <Loader /> : <h2>{title}</h2>)}

      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
