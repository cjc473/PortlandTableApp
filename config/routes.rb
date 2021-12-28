Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :reservations, only: [:index]
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:update, :destroy]
    resources :restaurants, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end
    resources :reservations, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  
end

