import React from 'react';

const List = props => {
  const { isFetching, fetchError, data, name } = props;
  if (isFetching || fetchError) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="data__list">
        <h6>{name}</h6>
        <ul>
          {props.data.map((el, i) => (
            <li key={i + 1}>{Object.values(el).toString()}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default List;
