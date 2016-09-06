class CreateDms < ActiveRecord::Migration
  def change
    create_table :dms do |t|
      t.string :content, null: false
      t.integer :user_id, null: false
      t.integer :dm_chat_id, null: false
      t.timestamps null: false
    end
  end
end
