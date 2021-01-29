import { useEffect, useState } from 'react';

const PAGINATION_SIZE = 6;

export const useGroupedPosts = (data) => {
  const [groupedPosts, setGroupedPosts] = useState([]);
  // Prevent a height changing flash at first load
  const [posts, setPosts] = useState(data.slice(0, PAGINATION_SIZE));
  const [offset, setOffset] = useState(0);

  // Set the first group of posts to show
  useEffect(() => {
    if (groupedPosts.length && offset === 0) {
      setPosts(groupedPosts[offset]);
      setOffset((prev) => prev + 1);
    }
  }, [groupedPosts, offset]);

  // Group posts by pagination size
  useEffect(() => {
    let start = 0;
    let groups = Array.from(Array(Math.ceil(data.length / PAGINATION_SIZE)));
    groups = groups.map(() => {
      const group = data.slice(start, start + PAGINATION_SIZE);
      start += PAGINATION_SIZE;
      return group;
    });

    setGroupedPosts(groups);
  }, [data]);

  const appendPosts = () => {
    if (groupedPosts[offset] && groupedPosts[offset].length) {
      setPosts((prev) => [...prev, ...groupedPosts[offset]]);
      setOffset((prev) => prev + 1);
    }
  };

  return {
    posts,
    hasMorePosts: offset !== groupedPosts.length,
    appendPosts,
  };
};
