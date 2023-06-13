require "test_helper"

class SessionsControllerTest < ActionDispatch::IntegrationTest
  def params email
    password = 'mytube'
    { email: email, password: password }
  end

  test "should post login" do
    email = 'mytube1@gmail.com'
    post login_url, params: params(email)
    assert_response :success
  end

  test "should create a new user" do
    email = 'mytube2@gmail.com'
    post login_url, params: params(email)
    existed = User.exists?(email: email)
    assert_response :success
    assert existed
  end

  test "should login successfully" do
    email = 'mytube@gmail.com'

    post login_url, params: params(email)
    assert_response 200
  end

  test "password should be correct" do
    email = 'mytube@gmail.com'
    password = 'not_correct'
    params = { email: email, password: password }

    post login_url, params: params
    assert_response 404
  end
end
