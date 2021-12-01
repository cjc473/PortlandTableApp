class Api::ReservationsController < ApplicationController
  def index
    @reservation = Reservation.all #need to update so it filters by current user
    render :index
  end

  def show
    @reservation = Reservation.find(params[:id])
    render :show
  end

  def create

  end

  def destroy

  end

  def update

  end

  private

  def reservation_params
    params.require(:reservation).permit
  end

end
