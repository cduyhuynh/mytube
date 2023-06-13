class VideoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "noti_#{params[:channel]}"
  end

  def unsubscribed
     ActionCable.server.remote_connections.where(current_user: current_user).disconnect
  end
end