class HomeController < ApplicationController
  def index
    @events = Event.first(5)
  end
  def events
    respond_to do |format|
      format.html{
        @search = Event.search(params[:q])

        @events = @search.result
      }
      format.js{
        @search = Event.search(params[:q])

        @events = @search.result
      }
    end
  end
  def event
    @event = Event.find(params[:id])
  end
  def our_team
    @members = TeamMember.all
  end

end
