class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.create(channel_params)
    if @channel
      render 'api/channel/show'
    else
      render json: ['Could not create channel'], status: 404
    end
  end

  def show
    render 'api/channel/show'
  end

  def destroy
    @channel = Channel.find_by_id(params[:id])
    @channel.destroy
  end
end
