class UpdateReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :score

    add_column :reviews, :overall, :integer, null: false
    add_column :reviews, :food, :integer, null: false
    add_column :reviews, :service, :integer, null: false
    add_column :reviews, :ambience, :integer, null: false
    add_column :reviews, :res_date, :date, null: false
  end
end
