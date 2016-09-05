class Api::TeamMembershipsController < ApplicationController
  def create
    @tm = TeamMembership.create(team_membership_params)
    if @tm
      render 'api/team/show'
    else
      render json: ['Could not create association'], status: 404
    end
  end

  def destroy
    @tm = TeamMembership.find_by_id(params[:id])
    @tm.destroy
  end
end
