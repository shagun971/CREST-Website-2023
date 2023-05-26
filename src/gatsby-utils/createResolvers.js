const { slugify } = require("../utils");

module.exports = ({ createResolvers }) => {
  const resolvers = {
    Article: {
      postedAt: {
        resolve: (source) => {
          return {
            date: source.postedAt,
            slug: slugify(source.postedAt),
          };
        },
      },
      categories: {
        resolve: (source) => {
          return source.categories.map((cat) => ({
            title: cat,
            slug: slugify(cat),
          }));
        },
      },
      tags: {
        resolve: (source) => {
          return source.tags.map((tag) => ({
            title: tag,
            slug: slugify(tag),
          }));
        },
      },
      content: {
        resolve: async (source, _args, context, info) => {
          await context.nodeModel.prepareNodes(
            info.parentType,
            { parent: { body: true } },
            { parent: { body: true } },
            [info.parentType.name]
          );

          const newSource = context.nodeModel.getNodeById({
            id: source.id,
          });

          return (
            newSource &&
            newSource.__gatsby_resolved &&
            newSource.__gatsby_resolved.parent &&
            newSource.__gatsby_resolved.parent.body
          );
        },
      },
    },
    News: {
      postedAt: {
        resolve: (source) => {
          return {
            date: source.postedAt,
            slug: slugify(source.postedAt),
          };
        },
      },
      categories: {
        resolve: (source) => {
          return source.categories.map((cat) => ({
            title: cat,
            slug: slugify(cat),
          }));
        },
      },
      tags: {
        resolve: (source) => {
          return source.tags.map((tag) => ({
            title: tag,
            slug: slugify(tag),
          }));
        },
      },
      content: {
        resolve: async (source, _args, context, info) => {
          await context.nodeModel.prepareNodes(
            info.parentType,
            { parent: { body: true } },
            { parent: { body: true } },
            [info.parentType.name]
          );

          const newSource = context.nodeModel.getNodeById({
            id: source.id,
          });

          return (
            newSource &&
            newSource.__gatsby_resolved &&
            newSource.__gatsby_resolved.parent &&
            newSource.__gatsby_resolved.parent.body
          );
        },
      },
    },
  };
  createResolvers(resolvers);
};
