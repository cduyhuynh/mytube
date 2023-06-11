class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.text :url
      t.references :user
      t.timestamps
    end
  end
end
