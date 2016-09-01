export const TeamConstants = {
  FETCH_TEAM: "FETCH_TEAM",
  RECEIVE_CURRENT_TEAM: "RECEIVE_CURRENT_TEAM",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchTeam = team => ({
  type: TeamConstants.FETCH_TEAM,
  team
});

export const receiveCurrentTeam = currentTeam => ({
  type: TeamConstants.RECEIVE_CURRENT_TEAM,
  currentTeam
});

export const receiveErrors = errors => ({
  type: TeamConstants.RECEIVE_ERRORS,
  errors
});
