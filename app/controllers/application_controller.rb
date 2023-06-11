class ApplicationController < ActionController::Base
  before_action :authenticate_user
  attr_reader :current_user

  def authenticate_user
    email = cookies.encrypted["mytube_user"]
    @current_user ||= User.find_by_email email
    if @current_user.nil? && !allowed_url.include?(request.fullpath)
      redirect_to "", status: 301
    end
  end

  private
  def allowed_url
    ["/", "/login"]
  end
end
