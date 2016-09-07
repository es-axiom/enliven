export const UserConstants = {
  RECEIVE_USER_TEAMS: "RECEIVE_USER_TEAMS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const receiveUserTeams = userTeams => ({
  type: UserConstants.RECEIVE_USER_TEAMS,
  userTeams
});

export const receiveErrors = errors => ({
  type: UserConstants.RECEIVE_ERRORS,
  errors
});
