Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    post :sign_up, to: "registrations#create", as: "registration"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#index"
end
