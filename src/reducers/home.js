import _ from 'lodash';

export default (state = [], actions) => {
    switch (actions.type) {
        case 'Add':
            state = _.concat(state, actions.data);
            return state;
        case 'Show':
            return state;
        default:
            return state;
    }
}