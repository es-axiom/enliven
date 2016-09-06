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

(1..25).each do |i|
  Channel.create(
    name: Faker::University.name,
    team_id: rand(10),
    status: Faker::Company.catch_phrase
    chat_id: i
  )
end

(25..75).each do |i|
  DmChat.create(
    title: Faker::App.name,
    chat_id: i
  )
end

400.times do
  msg = Message.create(content: Faker::StarWars.quote, user_id: rand(30))
  ChatPost.create(message_id: msg.id, )
end
