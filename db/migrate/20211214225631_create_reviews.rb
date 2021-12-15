class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false 
      t.integer :score, null: false
      t.integer :restaurant_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :reviews, :restaurant_id
    add_index :reviews, :author_id
  end
end
