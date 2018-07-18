/* eslint-disable global-require */
const projects = [{
  id: 1,
  title: 'First Project',
  creator: 'james',
  currency: 'sol',
  funded: 10,
  goal: 5,
  type: 'game',
  img: require('@/assets/img/item-example.jpeg'),
  due: '2018-07-20T12:00:00Z',
}, {
  id: 2,
  title: 'Second Project',
  creator: 'ha',
  currency: 'eos',
  funded: 1,
  goal: 5,
  type: 'music',
  img: require('@/assets/img/item-example2.jpeg'),
  due: '2018-08-25T12:00:00Z',
}, {
  id: 3,
  title: 'Thrid Project',
  creator: 'chung',
  currency: 'btc',
  funded: 3,
  goal: 5,
  type: 'art',
  img: require('@/assets/img/item-example3.jpeg'),
  due: '2018-07-25T12:00:00Z',
}, {
  id: 4,
  title: 'Fourth Project',
  creator: 'yeom',
  currency: 'eth',
  funded: 20,
  goal: 5,
  type: 'game',
  img: require('@/assets/img/item-example2.jpeg'),
  due: '2018-07-19T12:00:00Z',
}, {
  id: 5,
  title: 'Fifth Project',
  creator: 'kang',
  currency: 'usd',
  funded: 5,
  goal: 5,
  type: 'art',
  img: require('@/assets/img/item-example.jpeg'),
  due: '2018-07-31T12:00:00Z',
}];
/* eslint-disable global-require */

const actions = {
  loadProjects: ({ commit }) => commit('loadProjects', projects),
  setProject: ({ commit }, project) => commit('setProject', project),
};

export default actions;
