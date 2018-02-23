class HomeController < ApplicationController
  def index
  end
  def events
    respond_to do |format|
      format.html{
        @search = Event.search(params[:q])
        # byebug
        @events = @search.result
      }
      format.js{
        @search = Event.search(params[:q])
        # byebug
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
  private
  # def params
  #
  #
  # end

end
