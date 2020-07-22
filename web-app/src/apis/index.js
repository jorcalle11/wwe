export async function fetchDataByEntity(entity = 'todos') {
  const url = `https://jsonplaceholder.typicode.com/${entity}`;
  const response = await fetch(url);

  if (!response.ok) {
    return Promise.reject(response.body);
  }

  return response.json();
}

export default { fetchDataByEntity };
