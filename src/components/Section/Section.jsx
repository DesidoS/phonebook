import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contact/selectors';
import { Loader } from '../Loader';
import { Heading, Flex } from '@chakra-ui/react';

const Section = ({ header, title, children }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {header && (
        <Flex justifyContent="center">
          <Heading as="h1">{header}</Heading>
        </Flex>
      )}
      {title &&
        (isLoading && !error ? (
          <Flex justifyContent="center">
            <Loader />
          </Flex>
        ) : (
          <Flex justifyContent="center">
            <Heading as="h2" size="xl">
              {title}
            </Heading>
          </Flex>
        ))}

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
