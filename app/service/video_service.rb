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
end