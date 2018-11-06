/* eslint no-unused-vars: 0 */
class GitHub {
  constructor() {
    this.client_id = 'f681da0b4590ae36a48f';
    this.client_secret = '157bc4d6a2a81be7c444d476bedefb72735e94cd';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
