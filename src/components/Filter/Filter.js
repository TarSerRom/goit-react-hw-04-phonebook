import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  return (
    <div className="filter-container">
      <p className="title-text">Find contacts by name</p>
      <input
        className="form__input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};