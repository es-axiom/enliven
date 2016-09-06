class CreateTeamMemberships < ActiveRecord::Migration
  def change
    create_table :team_memberships do |t|
      t.integer :user_id, null: false, index: true
      t.integer :team_id, null: false, index: true
      t.boolean :moderator, default: false
      t.timestamps null: false
    end
  end
end
