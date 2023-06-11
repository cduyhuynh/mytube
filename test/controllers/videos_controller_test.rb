require "test_helper"

class VideosControllerTest < ActionDispatch::IntegrationTest
  def set_request_cookie
    user = User.first
    cookie_jar = ActionDispatch::Request.new(Rails.application.env_config.deep_dup).cookie_jar
    cookie_jar.encrypted["mytube_user"] = {value: user.email, expires: 7.days}
    cookies["mytube_user"] = cookie_jar["mytube_user"]
  end

  test "should get share" do
    get share_url
    assert_response :success
  end

  test "should share new video successfully" do
    url = 'https://www.youtube.com/watch?v=5y_KJAg8bHI'
    set_request_cookie
    post share_url, params: {url: url}

    existed = Video.exists?(url: url)
    assert_response :success
    assert existed
  end

  test "should share shorten Youtube url successfully" do
    url = 'https://youtu.be/watch?v=5y_KJAg8bHI'
    set_request_cookie
    post share_url, params: {url: url}

    existed = Video.exists?(url: url)
    assert_response :success
    assert existed
  end

  test "should share a valid Youtube video url" do
    url = 'https://mytube.com/watch?v=5y_KJAg8bHI'
    set_request_cookie
    result = post share_url, params: {url: url}

    assert_response :bad_request
  end
end
