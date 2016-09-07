class Api::MessagesController < ApplicationController
  def create
    @message = Message.create(message_params)
    if @message
      render 'api/messages/show'
      # TODO: Finish implementing Pusher
      Pusher.trigger(
        'channel_' + channel.id.to_s,
        'post_message',
        {}
      )
    else
      render json: ['could not create message'], status: 404
    end
  end

  def show
    @message = Message.find_by_id(params[:message_id])
    render 'api/messages/show'
  end

  def destroy
    @message = Message.find_by_id(params[:message_id])
    @message.destroy
  end
end
