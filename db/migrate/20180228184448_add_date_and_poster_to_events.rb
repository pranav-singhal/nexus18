class AddDateAndPosterToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :poster, :string
    add_column :events, :date, :datetime
  end
end
