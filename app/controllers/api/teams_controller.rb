class Api::TeamsController < ApplicationController
  def create
    @team = Team.create(team_params)
    if @team
      render 'api/teams/show'
    else
      render json: @team.errors.full_messages, status: 404
    end
  end

  def show
    @team = Team.find_by_id(params[:id])
    render 'api/teams/show'
  end

  def destroy
    @team = Team.find_by_id(params[:id])
    if @team.destroy
      render 'api/teams/index'
    else
      render json: ['Could not delete Team'], status: 404
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :description, :searchable)
  end
end
