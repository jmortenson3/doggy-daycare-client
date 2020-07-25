export const apiCall = async (
  url: string,
  method: string,
  body?: string
): Promise<Response> => {
  return fetch(`https://localhost:5001${url}`, {
    credentials: 'include',
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
};
