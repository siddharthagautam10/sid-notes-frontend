
export const saveToken = (token) => {
  localStorage.setItem('TOKEN_KEY', token);
};

export const getToken = () => {
  return localStorage.getItem('TOKEN_KEY');
};

export const destroyToken = () => {
  localStorage.removeItem('TOKEN_KEY');
};

