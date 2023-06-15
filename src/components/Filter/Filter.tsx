import './Filter.scss';


interface FilterProps {
  title: string,
  options: string[],
  onOptionChange: (value: string) => void,
}

export const Filter: React.FC<FilterProps>
= ({title, options, onOptionChange}) => {


  return (<fieldset className="filter">
    <p className="filter__title">{title}<br></br> </p>
    <select
      className="filter__selection"
      onChange={(e) => onOptionChange(e.target.value)}
    >
      {options.map(option => (
        <option
          key={title}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  </fieldset>);
};
