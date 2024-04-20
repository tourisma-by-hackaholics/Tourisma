import PropTypes from "prop-types";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={`px-8 md:px-10 lg:px-32 max-w-[120rem] mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
