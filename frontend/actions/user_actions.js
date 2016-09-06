export const UserConstants = {
  FETCH_USER_TEAMS: "FETCH_USER_TEAMS",
  RECEIVE_USER_TEAMS: "RECEIVE_USER_TEAMS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchUserTeams = user => ({
  type: UserConstants.FETCH_USER_TEAMS,
  user
});

export const receiveUserTeams = userTeams => ({
  type: UserConstants.RECEIVE_USER_TEAMS,
  userTeams
});

export const receiveErrors = errors => ({
  type: UserConstants.RECEIVE_ERRORS,
  errors
});
