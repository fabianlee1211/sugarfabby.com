import { useEffect, useState } from 'react';

// Group data for pagination
export const useGroupItems = (data, size = 6) => {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState(data.slice(0, size));
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    let start = 0;
    const emptyGroups = Array.from(Array(Math.ceil(data.length / size)));
    const filledGroups = emptyGroups.map(() => {
      const group = data.slice(start, start + size);
      start += size;
      return group;
    });

    setGroups(filledGroups);
  }, [data]);

  const appendItems = () => {
    if (groups[offset] && groups[offset].length) {
      setItems((prev) => [...prev, ...groups[offset]]);
      setOffset((prev) => prev + 1);
    }
  };

  return {
    items,
    hasMoreItems: offset !== groups.length,
    appendItems,
  };
};
