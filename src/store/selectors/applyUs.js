import { createSelector } from "reselect";

const applyUs = ({ applyUs }) => applyUs;
export const getState = createSelector(applyUs, ({ ...state }) => (state ?? { ...state }));