// Async function to post a new app in the API involvement
const PostApp = async () => {
  const appId = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  )
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then((data) => data.result);
  return appId;
};

export default PostApp;
