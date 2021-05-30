import { extendType, objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.body();
    t.model.published();
    t.model.authorId();
    t.model.author();
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.post();
    t.crud.posts({ filtering: true });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOnePost();
    t.crud.deleteManyPost();
    t.crud.deleteOnePost();
    t.crud.updateManyPost();
    t.crud.updateOnePost();
    t.crud.upsertOnePost();
  },
});
