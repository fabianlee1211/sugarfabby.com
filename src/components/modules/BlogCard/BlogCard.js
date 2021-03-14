import Card from '@components/elements/Card/Card';
import { PostItem } from '@components/templates/SummarySection/SummaryItems';
import * as React from 'react';

const BlogCard = (props) => {
  return (
    <Card image={props.blog.banner} title={props.blog.title}>
      <PostItem {...props.blog} {...props} />
    </Card>
  );
};

export default BlogCard;
