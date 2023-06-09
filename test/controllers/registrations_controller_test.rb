require "test_helper"

class RegistrationsControllerTest < ActionDispatch::IntegrationTest
  def params email
    password = 'mytube'
    { email: email, password: password }
  end

  test "should post register" do
    email = 'mytube1@gmail.com'
    post registration_url, params: params(email)
    assert_response :success
  end

  test "should create a new user" do
    email = 'mytube2@gmail.com'
    post registration_url, params: params(email)
    existed = User.exists?(email: email)
    assert existed
  end

  test "email should be unique" do
    email = 'mytube@gmail.com'

    post registration_url, params: params(email)
    assert_response 409
  end
end
