import { createSelector } from "reselect";

const fetch = ({ fetch }) => fetch;
export const getResponse = createSelector(fetch, ({ ...object }) => (object ?? { ...object }));