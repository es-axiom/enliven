class UsersController < ApplicationController
  def new
    render json: User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(user)
      render json: @user
    else
      flash.new[:errors] = @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
