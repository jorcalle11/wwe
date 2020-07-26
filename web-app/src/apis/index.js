export async function fetchDataByEntity(entity = 'todos', options = {}) {
  const url = `${process.env.REACT_APP_API_URL}/${entity}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    return Promise.reject(response.body);
  }

  return response.json();
}

export function getFetcherWithAbort(entity) {
  return function fetcher() {
    const controller = new AbortController();
    const signal = controller.signal;
    const promise = fetchDataByEntity(entity, { signal });

    promise.cancel = () => controller.abort();
    return promise;
  };
}

export default { fetchDataByEntity, getFetcherWithAbort };
