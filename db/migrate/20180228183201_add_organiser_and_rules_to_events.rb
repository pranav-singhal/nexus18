class AddOrganiserAndRulesToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :organiser, :string
    add_column :events, :rules, :text
  end
end
