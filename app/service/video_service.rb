class VideoService
  include VideosHelper
  def initialize current_user
    @user = current_user
  end

  def create url
    video = Video.new
    video.url = url
    video.embedded_url = embedded_url url
    video.user_id = @user.id
    video.save!
  end

  def list page
    videos = Video.joins("LEFT JOIN users ON videos.user_id = users.id")
                .select(:id, :embedded_url, "users.email")
                .offset(page*per_page)
                .limit(per_page)
  end
end