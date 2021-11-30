class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all 
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render "api/restaurants/show"
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :price, :neighborhood, :primary_tag, :secondary_tag, :tertiary_tag)
  end
end
