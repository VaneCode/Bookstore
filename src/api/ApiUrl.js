import PostApp from "./PostApp";
// hM8aa50qhCdSXzhCHxt2
// oc3seMNDCGBWexpAxJlM

const ApiId = PostApp();
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ApiId}`;
 
export default url;