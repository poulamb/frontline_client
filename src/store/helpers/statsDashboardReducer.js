import update from "immutability-helper";
import axios from 'axios';

function generateStatsDashboardDispatcher(types) {
  return (dispatch) => ({
    getStatCardData: async (action) => {
      try {
        let response = await axios.get('/api/stats/highlights')
        dispatch({
          type: types.RECEIVE_STAT_CARD_DATA,
          ...action,
          data: response
        })
      }
      catch (err) {
        dispatch({
          type: types.ERROR,
          ...action,
          data: err.message
        })
      }
    },
    getZoneData: async (action) => {
      try {
        let response = await axios.get('https://api.covid19india.org/zones.json')
        dispatch({
          type: types.RECEIVE_ZONE_DATA,
          ...action,
          data: response.data.zones.filter(x => x.statecode === 'KA')
        })
      }
      catch (err) {
        dispatch({
          type: types.ERROR,
          ...action,
          data: err.message
        })
      }
    },
  });
}

function generateStatsDashboardReducer(types, initialState) {
  return (state = initialState, action) => {
    switch (action.type) {
      case types.GET_STAT_CARD_DATA: { return state; }
      case types.RECEIVE_STAT_CARD_DATA: {
        return update(state, {
          statCardData: { $set: action.data.data }
        })
      }
      case types.GET_ZONE_DATA: { return state; }
      case types.RECEIVE_ZONE_DATA: {
        return update(state, {
          zoneData: { $set: action.data }
        })
      }
      case types.ERROR: {
        console.error(action.data)
        return state;
      }
      default:
        return state;
    }
  };
}

export { generateStatsDashboardDispatcher, generateStatsDashboardReducer };
