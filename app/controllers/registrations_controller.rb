class RegistrationsController < Devise::RegistrationsController
  include SessionHelper
  before_action :sign_up_params, only: :create
  def create
    begin
      sign_up "user", resource
      set_user_cookie
      render json: {}, status: :ok
    rescue => e
      case e.class.name
      when ActiveRecord::RecordNotUnique.name
        render json: { message: e}, status: 409
      else
        render json: { message: e}, status: 400
      end
    end
  end

  private
  def sign_up_params
    params.permit :email, :password
  end

  def resource
    user = User.new
    user.attributes = sign_up_params
    user.save!
    user
  end
end
