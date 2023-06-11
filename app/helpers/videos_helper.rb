module VideosHelper
  def valid_url_pattern
    /(https:\/\/)+(www.)*(youtube.com|youtu\.be)\/watch\?v=(\w)+/
  end
end
