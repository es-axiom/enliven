class Chat < ActiveRecord::Base
  validates :team_id, presence: true

  belongs_to :channel
  has_many :messages
end
