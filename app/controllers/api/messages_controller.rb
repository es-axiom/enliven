class Api::MessagesController < ApplicationController
  def create
    @message = Message.create(message_params)
    if @message
      render 'api/messages/show'
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
