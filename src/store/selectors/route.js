import { createSelector } from "reselect";

const router = ({ router }) => router;
export const getState = createSelector(router, ({ ...state }) => (state ?? { ...state }));