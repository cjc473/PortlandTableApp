# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  body          :text             not null
#  score         :integer          not null
#  restaurant_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord

  validates :title, :body, :score, :restaurant_id, :author_id, presence: true

  belongs_to :restaurant

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
end
