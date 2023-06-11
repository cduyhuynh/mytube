class VideoService
  def initialize current_user
    @user = current_user
  end

  def create url
    video = Video.new
    video.url = url
    video.user_id = @user.id
    video.save!
  end

  def list
    videos = Video.joins("LEFT JOIN users ON videos.user_id = users.id")
                .select(:id, :url, "users.email")
                .last(5)
  end
end