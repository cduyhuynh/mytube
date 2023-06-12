class AddEmbeddedUrlToVideo < ActiveRecord::Migration[7.0]
  def change
    add_column :videos, :embedded_url, :text
  end
end
