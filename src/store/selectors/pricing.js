import { createSelector } from "reselect";

const pricing = ({ pricing }) => pricing;
export const getState = createSelector(pricing, ({ ...state }) => (state ?? { ...state }));