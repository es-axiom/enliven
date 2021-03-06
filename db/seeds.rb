
# Create Teams
Team.create(
  name: 'Rebel Alliance',
  description: Faker::Hipster.sentence(5)
)

# Create Users
# Associate users to teams
(1..20).each do |i|
  User.create(
    username: Faker::StarWars.character,
    email: Faker::Internet.email,
    password: 'password'
  )
  TeamMembership.create(user_id: i, team_id: 1)
end

User.create(
  username: 'Young Padawan',
  email: Faker::Internet.email,
  password: 'password'
)
TeamMembership.create(user_id: 21, team_id: 1)
# Create channels with their corresponding chat
# Seed messages
12.times do
  ch = Channel.create(
    name: Faker::StarWars.planet.upcase,
    team_id: 1,
    status: Faker::StarWars.specie.downcase
  )
  next unless ch
  chat = Chat.create(channel_id: ch.id)
  next unless chat.id
  30.times do
    Message.create(
      content: Faker::Hacker.say_something_smart,
      chat_id: chat.id,
      user_id: rand(20)
    )
  end
end

# Seed DmChat and Dms, naiive seeds
(1..40).each do |i|
  DmChat.create
  DmSub.create(dm_chat_id: i, user_id: i)
  DmSub.create(dm_chat_id: 40 - i, user_id: i)
  Dm.create(dm_chat_id: i, user_id: i, content: 'My first messages')
end
