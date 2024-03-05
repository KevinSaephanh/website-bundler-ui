function getOAuthUrl() {
  const authUrl = 'https://accounts.google.com/o/oauth2/auth?';
  const clientId = process.env['GOOGLE_CLIENT_ID']!;
  const redirectUri = chrome.identity.getRedirectURL();
  return `${authUrl}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email`;
}

function checkAuth() {
  return (
    chrome.identity.getAuthToken({ interactive: false }), (token) => !!token
  );
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.message === 'login') {
    // Check if user is already authenticated
    const isAuth = checkAuth();
    if (isAuth) return;

    // Redirect to Google OAuth
    chrome.identity.launchWebAuthFlow(
      {
        url: getOAuthUrl(),
        interactive: true,
      },
      function (redirect_uri) {
        sendResponse(`Success, redirecting to: ${redirect_uri}`);
      }
    );
  }
});
