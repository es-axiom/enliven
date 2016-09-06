class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.create(channel_params)
    if @channel
      render 'api/channels/show'
    else
      render json: ['Could not create channel'], status: 404
    end
  end

  def index
    @messages = []
    @channels = []
    if params[:info]
      chat = Channel.find_by_id(params[:info]).chat
      @messages = chat.messages
      render 'api/channels/index'
    else
      @channels = Team.find_by_id(params[:team_id]).channels
      render 'api/channels/index'
    end
  end

  def show
    @channel = Channel.find_by_id(params[:id])
    render 'api/channels/show'
  end

  def destroy
    @channel = Channel.find_by_id(params[:id])
    @channel.destroy
  end
end
