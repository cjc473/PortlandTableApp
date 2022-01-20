class Api::ReviewsController < ApplicationController

  def index
    if params[:restaurant_id]
      @reviews = Review.where({restaurant_id: params[:restaurant_id]})
    elsif params[:user_id] 
      @reviews = Review.where({author_id: params[:user_id]})
    end
    render :index
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.create(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.destroy
    else 
      render json: ['Unable to delete review, must be logged in as correct user'], status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :restaurant_id, :author_id, :overall, :food, :service, :ambience, :res_date)
  end

end
