import { extendType, objectType } from 'nexus';

export const Author = objectType({
  name: 'Author',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.Posts();
  },
});

export const AuthorQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.author();
    t.crud.authors({ filtering: true });
  },
});

export const AuthorMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAuthor();
    t.crud.deleteManyAuthor();
    t.crud.deleteOneAuthor();
    t.crud.updateManyAuthor();
    t.crud.updateOneAuthor();
    t.crud.upsertOneAuthor();
  },
});
