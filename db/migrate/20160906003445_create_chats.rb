class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.integer :channel_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
