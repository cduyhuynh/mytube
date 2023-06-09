module SessionHelper
  def set_user_cookie
    cookies.encrypted["mytube_user"] = {value: current_user.email, expires: 6.months}
  end
end
