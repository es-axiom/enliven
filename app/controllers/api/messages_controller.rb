class Api::MessagesController < ApplicationController
  def create
    mp = message_params
    mp[:chat_id] = mp[:chat_id].to_i
    mp[:user_id] = current_user.id
    @message = Message.create(mp)
    @channels = []
    if @message
      @messages = Channel.find_by_id(mp[:chat_id]).messages
      render 'api/channels/index'
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

  private

  def message_params
    params.require(:message).permit(:content, :chat_id)
  end
end
