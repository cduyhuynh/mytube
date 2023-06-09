class React::VideosController < ApplicationController
  include VideosHelper
  before_action :verify_url, only: :share

  def index
    videos = service.list params[:page].to_i
    render json: { videos: videos }, status: :ok
  end

  def share
    service.create params[:url]
    render json: { message: 'Your URL has been shared' }, status: :ok
  end

  private
  def service
    @service ||= VideoService.new current_user
  end

  def verify_url
    unless params[:url].match?(valid_url_pattern)
      render json: { message: 'Invalid Youtube URL' }, status: :bad_request
    end
  end
end
