const registerForm = $('#register-form');
// const loginForm = $('#login-form');
const logoutBtn = $('#logout-btn');

const handleRegister = async (event) => {
  event.preventDefault();

  const username = $('#username').val();
  const email = $('#email').val();
  const password = $('#password').val();

  if (username && email && password) {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  }
};

// const handleLogin = async (event) => {
//   event.preventDefault();

//   console.log('submitted');
//   const username = $('#username').val();
//   const email = $('#email').val();
//   const password = $('#password').val();

//   if (username && email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       window.location.replace('/');
//     } else {
//       alert('Failed to login');
//     }
//   }
// };

const handleLogout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
  });

  if (response.ok) {
    window.location.replace('/login');
  } else {
    alert('Failed to logout');
  }
};

registerForm.on('submit', handleRegister);
// loginForm.on('submit', handleLogin);
logoutBtn.on('click', handleLogout);
