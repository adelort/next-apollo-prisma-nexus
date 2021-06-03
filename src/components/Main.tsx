import { gql } from '@apollo/client';
import React from 'react';
import { AuthorsQuery, useAuthorsQuery } from '../../generated/graphql';
import { UnwrapArray } from '../lib/typescript';

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
          <p>
            <strong>{`${author.name}`}</strong>
          </p>
          {author.Posts.length > 0 ? (
            author.Posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p>{"Pas d'oeuvre"}</p>
          )}
          <br />
        </div>
      ))}
    </div>
  );
};

type FetchedPost = UnwrapArray<UnwrapArray<AuthorsQuery['authors']>['Posts']>;

const Post: React.FC<{ post: FetchedPost }> = ({ post }) => (
  <div>
    <p>{`- ${post.title}`}</p>
    <p>{post.body}</p>
    <br />
  </div>
);
