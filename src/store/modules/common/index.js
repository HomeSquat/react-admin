import { fromJS } from 'immutable';

const defaultState = fromJS({
  collapsed: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'toggleCollapsed': return state.set('collapsed', !state.get('collapsed'))
    default: return state;
  }
}