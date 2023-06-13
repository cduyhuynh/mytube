Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    post :login, to: "sessions#create", as: "login"
    get :me, to: "sessions#me"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get :share, to: "videos#share"
  namespace :react, defaults: { format: 'json' } do
    namespace :videos do
      get :index
      post :share
    end
  end
  # Defines the root path route ("/")
  root "static#index"
end
