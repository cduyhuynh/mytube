class VideosController < ApplicationController
  include VideosHelper
  before_action :verify_url, only: :create
  def share
    render "/static/index"
  end

  def create
    service.create params[:url]
    render json: { message: 'New url created' }, status: :ok
  end

  protected
  def service
    @service ||= VideoService.new current_user
  end

  def verify_url
    unless params[:url].match?(valid_url_pattern)
      render json: { message: 'Invalid Youtube url' }, status: :bad_request
    end
  end
end
