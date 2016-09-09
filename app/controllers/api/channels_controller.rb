class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.create(channel_params)
    Chat.create(channel_id: @channel.id)
    if @channel
      render 'api/channels/show'
    else
      render json: ['Could not create channel'], status: 404
    end
  end

  def index
    @channels = []
    @messages = []
    if params[:channel_id]
      @messages = Channel.find_by_id(params[:channel_id]).messages
    else
      @channels = Channel.all
    end
    render 'api/channels/index'
  end

  def show
    @channel = Channel.find_by_id(params[:id])
    render 'api/channels/show'
  end

  def destroy
    @channel = Channel.find_by_id(params[:id])
    @channel.destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :status, :team_id)
  end
end
