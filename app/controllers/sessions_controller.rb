class SessionsController < Devise::SessionsController
  include SessionHelper
  before_action :sign_in_params, only: :create
  before_action :load_user, only: :create

  def create
    sign_in "user", @user
    set_user_cookie
    render json: {message: @message}, status: :ok
  end

  def destroy
  end

  private
  def sign_in_params
    params.permit :email, :password
  end

  def load_user
    @user = User.find_for_database_authentication({email: sign_in_params[:email]})
    if @user.present?
      render json: {message: "Incorrect password"}, status: :not_found unless @user.valid_password?(sign_in_params[:password])
      @message = "Login successfully"
    else
      @user = User.new
      @user.attributes = sign_in_params
      @user.save!
      @user.reload
      @message = "Register successfully"
    end
  end

end
