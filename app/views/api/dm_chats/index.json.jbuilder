@dm_chats.each do |dm|
  json.set! dm.id do
    json.dm_id dm.id
    json.users dm.users
  end
end
