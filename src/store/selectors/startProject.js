import { createSelector } from "reselect";

const startProject = ({ startProject }) => startProject;
export const getState = createSelector(startProject, ({ ...state }) => (state ?? { ...state }));