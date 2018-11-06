/* eslint no-unused-vars: 0 */
class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
         <div class="card card-body mb-3">
            <div class="row">
               <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" class="btn btn-primary btn btn-block mb-4">View Pofile</a>
               </div>
               <div class="col-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-groups">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
               </div>
            </div
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
         <div id="repos"></div>
     `;
  }

  static showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
         <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
        `;

      const reposElement = document.getElementById('repos');

      reposElement.innerHTML = output;
    });
  }

  static showAlert(msg, classes) {
    UI.clearAlert();

    const alert = document.createElement('div');
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    alert.className = classes;
    alert.appendChild(document.createTextNode(msg));

    container.insertBefore(alert, search);

    setTimeout(() => {
      UI.clearAlert();
    }, 3000);
  }

  static clearAlert() {
    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
