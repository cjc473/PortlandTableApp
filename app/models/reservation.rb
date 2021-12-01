# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  party_size    :integer          not null
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  date          :date             not null
#  time          :string           not null
#
class Reservation < ApplicationRecord

  validates :party_size, :restaurant_id, :user_id, :date, :time, presence: true

  belongs_to :restaurant
  belongs_to :user
end
