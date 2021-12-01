class EditReservation < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :time

    add_column :reservations, :date, :date, null: false
    add_column :reservations, :time, :string, null: false
  end
end
