const github = new GitHub();
const ui = new UI();

const searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', e => {
  const input = e.target.value;

  if (input !== '') {
    github.getUser(input).then(res => {
      if (res.profile.message === 'Not Found') {
        UI.showAlert('Profile not found', 'alert alert-danger');
      } else {
        ui.showProfile(res.profile);
        UI.showRepos(res.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
