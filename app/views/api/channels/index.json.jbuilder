unless @channels.empty?
  @channels.each do |channel|
    json.set! channel.id do
      json.channel channel
      json.no_of_msg channel.chat.messages.count
    end
  end
end

unless @messages.empty?
  @messages.each do |msg|
    json.user msg.user
    json.content msg.content
    json.time_posted msg.created_at
  end
end
