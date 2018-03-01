class AddRegRequiredToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :reg_required, :boolean
  end
end
