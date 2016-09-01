class Team < ActiveRecord::Base
  validates :name, :searchable, presence: true
end
