Pi.authenticate(['profile']) // Replace 'profile' with the required scopes
  .then(authResult => {
    const accessToken = authResult.accessToken;
    const user = authResult.user;

    // Store the access token and user information securely
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', user.uid);
    localStorage.setItem('username', user.username);

    // Use the access token to make authenticated requests to the backend
    fetch('/api/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(userData => {
      // Use the verified user data from the backend
      console.log(userData);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  })
  .catch(error => {
    console.error('Authentication failed:', error);
  });