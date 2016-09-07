json.set! @message.id do
  json.author @message.user.username
  json.content @message.content
  json.time_created @message.created_at
end
