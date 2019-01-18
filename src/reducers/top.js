import { ADD_SCORE } from 'actions/types';
import { setValue, getValue } from 'helpers/localStorage';
import { bestPlayersStarter, sortTopList } from 'helpers/hall-of-fame';

const initState = () => {
  const bestPlayers = getValue('bestPlayers');

  // no saved results yet, app just started
  if (!bestPlayers) {
    // save starter values to localStorage:
    setValue('bestPlayers', bestPlayersStarter);

    // initialize state:
    return { bestPlayers: sortTopList(bestPlayersStarter) };
  }

  // otherwise, initialize the store with saved in localStorage values:
  return { bestPlayers: sortTopList(bestPlayers) };
};

export default function(state = initState(), action) {
  switch (action.type) {
    case ADD_SCORE:
      // extend current list with passsed values:
      const bestPlayers = sortTopList([
        ...state.bestPlayers,
        { ...action.payload }
      ]);

      // update localStorage:
      setValue('bestPlayers', sortTopList(bestPlayers));

      // update current state:
      return { ...state, bestPlayers };
    default:
      return state;
  }
}
