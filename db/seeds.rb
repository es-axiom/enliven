20.times do
  User.create(
    username: Faker::StarWars.character,
    email: Faker::Internet.email,
    password: 'password'
  )
end

10.times do
  Team.create!(
    name: Faker::Team.name,
    description: Faker::Hipster.sentence(9)
  )
end

TeamMembership.create(user_id: 1, team_id: 1)
TeamMembership.create(user_id: 2, team_id: 1)
TeamMembership.create(user_id: 3, team_id: 1)
TeamMembership.create(user_id: 3, team_id: 2)
TeamMembership.create(user_id: 1, team_id: 2)
TeamMembership.create(user_id: 4, team_id: 3)

120.times do |i|
  Channel.create(
    name: Faker::University.name,
    team_id: (i % 4),
    status: Faker::Company.catch_phrase
  )
end
