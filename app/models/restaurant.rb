# == Schema Information
#
# Table name: restaurants
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :text             not null
#  price         :string           not null
#  neighborhood  :string           not null
#  primary_tag   :string           not null
#  secondary_tag :string
#  tertiary_tag  :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Restaurant < ApplicationRecord

  validates :name, :description, :price, :neighborhood, :primary_tag, presence: true

  has_one_attached :photo
  has_many :reservations
  
end
