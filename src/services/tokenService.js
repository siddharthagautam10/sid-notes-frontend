
// const TOKEN_KEY = "G2v8H1pT?mQeThWmZq4t7w!z%C*F-JaNdRgUkXp2s5v8y/B?";

// export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = (token) => {
  localStorage.setItem('TOKEN_KEY', token);
};

export const getToken = () => {
  return localStorage.getItem('TOKEN_KEY');
};

export const destroyToken = () => {
  localStorage.removeItem('TOKEN_KEY');
};
