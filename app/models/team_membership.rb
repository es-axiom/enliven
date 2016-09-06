class TeamMembership < ActiveRecord::Base
  validates :team_id, :user_id, presence: true

  belongs_to :user
  belongs_to :team
end
