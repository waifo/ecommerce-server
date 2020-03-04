export default args => {
  if (args.id) return args.loaders.user.load(args.id);
  if (args.username) return loaders.userByUsername.load(args.username);
  return null;
};
