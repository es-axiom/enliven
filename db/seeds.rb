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

(1..20).each do |i|
  TeamMembership.create(user_id: i, team_id: rand(9))
end

20.times do
  Channel.create(
    name: Faker::University.name,
    team_id: rand(10),
    status: Faker::Company.catch_phrase
  )
end

40.times do
  DmChat.create(
    title: Faker::App.name
  )
end

50.times do
  ChatSubscription.create(
    user_id: rand(15),
    dm_chat_id: rand(40)
  )
end
