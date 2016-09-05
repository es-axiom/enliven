class Team < ActiveRecord::Base
  validates :name, :searchable, presence: true

  has_many :team_memberships
  has_many :users, through: :team_memberships
  has_many :channels
  
end
