require "test_helper"

class VideosControllerTest < ActionDispatch::IntegrationTest
  def set_request_cookie
    user = User.first
    cookie_jar = ActionDispatch::Request.new(Rails.application.env_config.deep_dup).cookie_jar
    cookie_jar.encrypted["mytube_user"] = {value: user.email, expires: 7.days}
    cookies["mytube_user"] = cookie_jar["mytube_user"]
  end

  test "should get share" do
    set_request_cookie
    get share_url
    assert_response :success
  end

  test "should only allow logged in user" do
    get share_url
    assert_response 301
  end
end
