class Api::DmChatsController < ApplicationController
  def create
    @DM = DmChat.create(dm_params)
    if @DM
      render 'api/dm_chats/show'
    else
      render json: ['Could not createm DM'], status: 404
    end
  end

  def index
    @user = current_user
    @DMs = @user.dm_chats
    render 'api/dm_chats/index'
  end

  def show
    @DM = DmChat.find_by_id(params[:dm_id])
    render 'api/dm_chats/show'
  end

  def destroy
    @DM = DmChat.find_by_id(params[:dm_id])
  end
end
