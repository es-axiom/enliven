export const TeamConstants = {
  FETCH_TEAM: "FETCH_TEAM",
  FETCH_USER_TEAMS: "FETCH_USER_TEAMS",
  RECEIVE_CURRENT_TEAM: "RECEIVE_CURRENT_TEAM",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchTeam = team => ({
  type: TeamConstants.FETCH_TEAM,
  team
});

export const fetchUserTeams = user => ({
  type: TeamConstants.FETCH_USER_TEAMS,
  user
});

export const receiveCurrentTeam = currentTeam => ({
  type: TeamConstants.RECEIVE_CURRENT_TEAM,
  currentTeam
});

export const receiveErrors = errors => ({
  type: TeamConstants.RECEIVE_ERRORS,
  errors
});
