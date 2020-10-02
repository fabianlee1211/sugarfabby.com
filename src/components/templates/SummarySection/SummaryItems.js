import Box from '@components/elements/Box/Box';
import Link from '@components/elements/MDX/Link';
import Heading from '@components/elements/Text/Heading';
import Text from '@components/elements/Text/Text';
import { Link as NavLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Title = styled(Heading)`
  width: fit-content;
  :hover {
    color: var(--color-primary);
  }
`;

const Category = styled(Text)`
  color: var(--color-primary);
  padding: 0 10px;
  width: fit-content;
  background: rgba(79, 172, 254, 0.2);
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const PostItem = ({
  category,
  link,
  title,
  description,
  date,
  timeToRead,
  ...props
}) => {
  return (
    <Box mb="40px" {...props}>
      <Box flexDirection="column">
        {category && (
          <Category size="small" fontWeight="500">
            {category}
          </Category>
        )}
        <NavLink to={link}>
          <Title size="h5" style={{ margin: 0 }}>
            {title}
          </Title>
        </NavLink>
        <Text
          style={{
            color: 'var(--color-text-secondary)',
            marginBottom: '10px',
          }}
        >
          {description}
        </Text>
        <Text size="small">{`${date} • ${timeToRead} minute read`}</Text>
      </Box>
    </Box>
  );
};

export const ProjectItem = ({
  title,
  description,
  publishedDate,
  demoLink,
  sourceLink,
}) => {
  return (
    <Box mb="30px">
      <Box flexDirection="column">
        <Link
          style={{ color: 'var(--color-text)', textDecoration: 'none' }}
          href={demoLink || sourceLink}
        >
          <Title size="h5" style={{ margin: 0 }}>
            {title}
          </Title>
        </Link>
        <Text
          style={{
            color: 'var(--color-text-secondary)',
            marginBottom: '5px',
          }}
        >
          {description.excerpt}
        </Text>
        <Text size="small">{new Date(publishedDate).getFullYear()}</Text>
      </Box>
    </Box>
  );
};
