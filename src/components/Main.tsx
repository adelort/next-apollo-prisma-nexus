import { gql, useQuery } from "@apollo/client";
import React from "react";

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
  const { data } = useQuery(authorsQuery);

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
