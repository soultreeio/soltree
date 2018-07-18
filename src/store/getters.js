const getters = {
  // projects: state =>
  //   (state.projects && state.scatter.identity ?
  //     state.scatter.identity.accounts.find(account => account.blockchain === 'eos') : null),
  projects: state => state.projects,
  getProjectsByType: state => type => state.projects.filter(project => project.type === type),
};

export default getters;
