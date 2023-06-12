module VideosHelper
  def valid_url_pattern
    /(https:\/\/)+(www.)*(youtube.com|youtu\.be)\/(watch\?v=)*(\w)+/
  end

  def embedded_url url
    url.gsub(/watch\?v=/, 'embed/')
  end

  def per_page
    5
  end
end
