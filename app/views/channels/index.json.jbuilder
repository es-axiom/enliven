unless @channels.empty?
  @channels.each do |channel|
    json.set! channel.id do
      json.partial! 'channel', channel: channel
    end
  end
end

unless @messages.empty?
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'message', message: message
    end
  end
end
