Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    post :login, to: "sessions#create", as: "login"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get :share, to: "videos#share"
  post :share, to: "videos#create"
  # Defines the root path route ("/")
  root "static#index"
end
