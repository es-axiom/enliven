@user_teams.each do |team|
  json.name team.name
  json.no_of_members team.users.count
  json.no_of_channels team.channels.count
end
