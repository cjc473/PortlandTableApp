# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  restaurant_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  overall       :integer          not null
#  food          :integer          not null
#  service       :integer          not null
#  ambience      :integer          not null
#  res_date      :date             not null
#
class Review < ApplicationRecord

  validates :body, :restaurant_id, :overall, :food, :service, :ambience, :res_date, :author_id, presence: true

  validates :restaurant_id, uniqueness: { scope: :author_id }

  belongs_to :restaurant

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
end
