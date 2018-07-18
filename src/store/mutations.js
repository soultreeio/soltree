const mutations = {
  loadProjects: (state, projects) => { state.projects = projects; },
  setProject: (state, project) => {
    state.projects = state.projects.map(p =>
      (p.id === project.id ? Object.assign({}, project) : p));
  },
};

export default mutations;
