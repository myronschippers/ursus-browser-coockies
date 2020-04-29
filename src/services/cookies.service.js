// get cookies from the cookies from the browser
const getCookie = (cookieName) => {
  const rawCookie = document.cookie;
  // get the name followed by anything except for a semicolon
  const cookieString = RegExp(`${cookieName}[^;]+`).exec(rawCookie);
  return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./, '') : '');
}

// save cookies to the browser
const setCookie = (cookieName, cookieValue) => {
  document.cookie = `${cookieName}=${cookieValue}`;
}

export {
  getCookie,
  setCookie,
};
