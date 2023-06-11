class ApplicationController < ActionController::Base
  before_action :authenticate_user
  attr_reader :current_user

  def authenticate_user
    email = cookies.encrypted["mytube_user"]
    @current_user ||= User.find_by_email email
  end
end
