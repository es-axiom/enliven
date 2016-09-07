export const TeamConstants = {
  FETCH_USER_TEAMS: "FETCH_USER_TEAMS",
  RECEIVE_USER_TEAMS: "RECEIVE_USER_TEAMS",
  RECEIVE_CURRENT_TEAM: "RECEIVE_CURRENT_TEAM",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchUserTeams = () => ({
  type: TeamConstants.FETCH_USER_TEAMS,
});

export const receiveUserTeams = teams => ({
  type: TeamConstants.RECEIVE_USER_TEAMS,
  teams
});

export const receiveCurrentTeam = team => ({
  type: TeamConstants.RECEIVE_CURRENT_TEAM,
  team
});

export const receiveErrors = errors => ({
  type: TeamConstants.RECEIVE_ERRORS,
  errors
});
