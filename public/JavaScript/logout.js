async function logout() {
  console.log("hello")
  const response = await fetch('/api/users/logout', {
    method: 'post', 
    headers: { 'Content-Type': 'application/json' }
  });

  // check out response 
  if(response.ok) {
    // if okay send user back to homepage 
    document.location.replace('/');
    console.log("success")
  } else {
    alert(response.statusText);
  }
};


document.querySelector('#logout').addEventListener('click', logout);