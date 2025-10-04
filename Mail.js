window.addEventListener('DOMContentLoaded', () => {
  const form  = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const pass  = document.getElementById('password');
  const err   = document.getElementById('loginError');
  const panel = document.getElementById('mailPanel');
  const box   = document.querySelector('.loginBox');

  // guard
  if (!form || !email || !pass || !err || !panel || !box) {
    console.error('Missing element(s):', { form, email, pass, err, panel, box });
    return;
  }

  email.focus();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const okEmail = email.value.trim().toLowerCase() === 'a';
    const okPass  = pass.value === '0023';

    if (okEmail && okPass) {
      // hide login, show the white mail panel
      box.style.display = 'none';
      panel.hidden = false;
      err.textContent = '';
    } else {
      err.textContent = 'Nice try but nope';
    }
  });
});
