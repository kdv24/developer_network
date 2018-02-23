module Api::V1
  class UsersController < ApplicationController

    def index
      @users = User.order("created_at DESC")
      render json: @users
    end

    def show
      @users = User.all
      render json: @users
    end

    def create
      @user = User.create(user_params)
      render json: @user
    end

    private

    def user_params
      params.require(:user).permit(:name, :email)
    end
  end
end