20.times do
  User.create!(
    username: Faker::StarWars.character,
    email: Faker::Internet.email,
    password: 'password'
  )
end
