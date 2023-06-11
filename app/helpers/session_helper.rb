module SessionHelper
  def set_user_cookie
    cookies.encrypted["mytube_user"] = {value: @user.email, expires: 7.days}
  end
end
