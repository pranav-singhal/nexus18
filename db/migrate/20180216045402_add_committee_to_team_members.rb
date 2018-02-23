class AddCommitteeToTeamMembers < ActiveRecord::Migration[5.1]
  def change
    add_column :team_members, :committee, :string
  end
end
