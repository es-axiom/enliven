class DmChat < ActiveRecord::Base
  validates :title, presence: true

  has_one :dm_chat
  has_many :dms
  has_many :dm_subs
  has_many :users, through: :dm_subs
end
