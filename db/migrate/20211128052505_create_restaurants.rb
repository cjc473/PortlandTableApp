class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :price, null: false
      t.string :neighborhood, null: false
      t.string :primary_tag, null: false
      t.string :secondary_tag
      t.string :tertiary_tag

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :primary_tag
    add_index :restaurants, :secondary_tag
    add_index :restaurants, :tertiary_tag
  end
end
