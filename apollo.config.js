module.exports = {
  client: {
    service: {
      name: 'next-apollo-prisma',
      url: 'http://localhost:3000/api/graphql',
      localSchemaFile: './generated/schema.graphql',
    },
    includes: ['./src/**/!(*.d).{ts,tsx}'],
  },
};
