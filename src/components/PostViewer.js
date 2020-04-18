import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Overview',
    dataIndex: 'overview',
  }
];

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      overview
    }
  }
`;

export default () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (
      <Table
        columns={columns}
        dataSource={data.posts}
        rowKey="id"
      />
    )}
  </Query>
);