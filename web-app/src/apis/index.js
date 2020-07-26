export async function fetchDataByEntity(entity = 'todos', options = {}) {
  const url = `${process.env.REACT_APP_API_URL}/${entity}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    return Promise.reject(response.body);
  }

  return response.json();
}

export default { fetchDataByEntity };
