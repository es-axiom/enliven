export const TeamConstants = {
  FETCH_USER_TEAMS: "FETCH_USER_TEAMS",
  RECEIVE_USER_TEAMS: "RECEIVE_USER_TEAMS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchUserTeams = () => ({
  type: TeamConstants.FETCH_USER_TEAMS,
});

export const receiveUserTeams = teams => ({
  type: TeamConstants.RECEIVE_USER_TEAMS,
  teams
});

export const receiveErrors = errors => ({
  type: TeamConstants.RECEIVE_ERRORS,
  errors
});
