require "test_helper"

class ReactVideosControllerTest < ActionDispatch::IntegrationTest
  def set_request_cookie
    cookie_jar = ActionDispatch::Request.new(Rails.application.env_config.deep_dup).cookie_jar
    cookie_jar.encrypted["mytube_user"] = {value: users(:one).email, expires: 7.days}
    cookies["mytube_user"] = cookie_jar["mytube_user"]
  end

  test "should allow not logged in user" do
    get react_videos_index_url
    assert_response :success
  end

  test "should return a list of videos" do
    get react_videos_index_url

    response_body = JSON.parse @response.body
    assert_response :success
    assert_equal(videos.length, response_body["videos"].count)
  end

  test "should only allow logged in user" do
    url = 'https://www.youtube.com/watch?v=5y_KJAg8bHI'
    post react_videos_share_url, params: {url: url}
    assert_response 301
  end

  test "should share new video successfully" do
    url = 'https://www.youtube.com/watch?v=5y_KJAg8bHI'
    set_request_cookie
    post react_videos_share_url, params: {url: url}

    existed = Video.exists?(url: url)
    assert_response :success
    assert existed
  end

  test "should share shorten Youtube url successfully" do
    url = 'https://youtu.be/watch?v=5y_KJAg8bHI'
    set_request_cookie
    post react_videos_share_url, params: {url: url}

    existed = Video.exists?(url: url)
    assert_response :success
    assert existed
  end

  test "should share a valid Youtube video url" do
    url = 'https://mytube.com/watch?v=5y_KJAg8bHI'
    set_request_cookie
    post react_videos_share_url, params: {url: url}

    assert_response :bad_request
  end
end
