@dm_chats.each do |dm|
  json.set! dm.id do
    json.partial! 'dm_chat', dm_chat: dm
  end
end
