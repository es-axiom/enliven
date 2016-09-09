unless @channels.empty?
  @channels.each do |channel|
    json.set! channel.id do
      json.channel channel
      json.no_of_msg channel.messages.count
    end
  end
end

unless @messages.empty?
  @messages.each do |msg|
    json.set! msg.id do
      json.user msg.user
      json.id msg.id
      json.content msg.content
      json.time_posted msg.created_at
    end
  end
end
