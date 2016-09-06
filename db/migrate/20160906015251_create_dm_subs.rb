class CreateDmSubs < ActiveRecord::Migration
  def change
    create_table :dm_subs do |t|
      t.integer :dm_chat_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
