import { gql } from '@apollo/client';
import React from 'react';
import { useAuthorsQuery } from '../../generated/graphql';

export const authorsQuery = gql`
  query authors {
    authors {
      id
      name
      Posts {
        id
        title
        body
      }
    }
  }
`;
export const Main: React.FC = () => {
  const { data } = useAuthorsQuery();

  const authors = data?.authors ?? [];

  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>
          <p>{author.name}</p>
        </div>
      ))}
    </div>
  );
};
