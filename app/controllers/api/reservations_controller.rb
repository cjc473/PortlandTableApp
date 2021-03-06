class Api::ReservationsController < ApplicationController
  def index
    if params[:user_id]
      @reservations = Reservation.where({user_id: params[:user_id]})
    else
      @reservations = Reservation.all 
    end
    render :index
  end

  def show
    @reservation = Reservation.find(params[:id])  
    render :show
  end

  def create
    @reservation = Reservation.create(reservation_params)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy
    else 
      render json: ['Unable to delete reservation, must be logged in as correct user'], status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:restaurant_id, :user_id, :party_size, :date, :time)
  end

end
