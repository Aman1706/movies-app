import React, { useState } from 'react';
import Link from 'next/link';

import axios from 'axios';

import { SearchStyles } from './styles/SearchStyles';

const PersonSearch = () => {
  const [items, setItems] = useState([]);

  const handleChange = async (e) => {
    if (!e.target.value) return setItems([]);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=2bda7f1d1e72293d54bd3c29b9b4b2f5&language=en-US&query=${e.target.value}`
    );
    const results = data.results.map(({ id, name }) => ({
      id,
      name,
    }));

    setItems(results);
  };

  return (
    <SearchStyles>
      <input
        type="search"
        placeholder="Search People"
        onChange={handleChange}
      />
      {items.length > 0 && (
        <div className="data-list">
          {items.map((item) => (
            <p key={item?.id}>
              <Link href={`/people/${item?.id}`}>{item?.name}</Link>
            </p>
          ))}
        </div>
      )}
    </SearchStyles>
  );
};

export default PersonSearch;
