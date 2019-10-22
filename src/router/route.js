export default (path, name = "Index") => {
  return () => import(`../${path}/${name}.vue`);
};
