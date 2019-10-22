import axios from "../axios";

const Entity = [
  "User",
  "Role",
  "Rule",
  "Menu",
  "Page",
  "Content",
  "Message",
  "Custom",
  "Folder",
  "PageCategory",
  "ContentCategory",
  "MessageCategory",
  "FolderCategory"
];
const CURD = ["Create", "Update", "Query", "Remove"];
const API = {};
for (const table of Entity) {
  // API[table] = {};
  for (const action of CURD) {
    const url = `${action}${table}`;
    API[url] = async data => {
      const all = await axios.post(url, data);
      return all.data;
    };
    // router.post(`/${action.name}${Name}`, action(name, rule));
  }
}
API.Post = async (url, data) => {
  const all = await axios.post(url, data);
  return all.data;
};
export default API;
// export const
