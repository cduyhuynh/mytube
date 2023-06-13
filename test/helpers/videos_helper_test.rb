require "test_helper"

class VideosHelperTest < ActionDispatch::IntegrationTest
  include VideosHelper

  test "should return true for valid url" do
    url = "https://youtu.be/watch?v=5y_KJAg8bHI"
    assert url.match?(valid_url_pattern)
  end

  test "should return false for invalid url" do
    url = "https://mytu.be/watch?v=5y_KJAg8bHI"
    refute url.match?(valid_url_pattern)
  end

  test "should return embedded url" do
    url = "https://youtu.be/watch?v=5y_KJAg8bHI"
    embed_url = "https://youtu.be/embed/5y_KJAg8bHI"
    assert_equal embed_url, embedded_url(url)
  end
end
