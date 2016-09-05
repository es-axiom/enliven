class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :team_id, null: false
      t.string :status
      t.timestamps null: false
    end
  end
end
