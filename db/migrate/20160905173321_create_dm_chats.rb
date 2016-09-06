class CreateDmChats < ActiveRecord::Migration
  def change
    create_table :dm_chats do |t|
      t.timestamps null: false
    end
  end
end
