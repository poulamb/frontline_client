import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

import {
  generateStatsDashboardDispatcher,
  generateStatsDashboardReducer,
} from "./helpers/statsDashboardReducer";
import { createSelector } from "reselect";

const scope = "statsDashboard";

const initialState = {
  statCardData: [
    {
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/rice-bag-2009452-1690425.png',
      title: 'Rice Distributed',
      value: '50',
      units: 'kg',
      desc: 'Rice distributed'
    },
    {
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/rice-bag-2009452-1690425.png',
      title: 'Rice Distributed',
      value: '50',
      units: 'kg',
      desc: 'Rice distributed'
    },
  ],
  zoneData: []
};
const statTypes = [
  'GET_ZONE_DATA',
  'RECEIVE_ZONE_DATA',
  'GET_STAT_CARD_DATA',
  'RECEIVE_STAT_CARD_DATA',
  'ERROR',
]

export const types = applyScope(scope, statTypes);

// reducer actions, pass callback function for custom actions
const statsDashboardReducer = generateStatsDashboardReducer(types, initialState);

// dispatch actions, pass custom actions if any
const mapDispatchToProps = generateStatsDashboardDispatcher(types);

// state with selectors
const mapStateToProps = pageSelector(scope, {
  result: createSelector(state => state[scope], (stats) => stats),
});

// connect
export const connecter = (StatsDashboard) =>
  connect(mapStateToProps, mapDispatchToProps)(StatsDashboard);

export default statsDashboardReducer;
