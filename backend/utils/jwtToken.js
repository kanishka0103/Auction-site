export const generateToken = (user, message, statusCode, res) => {

  const expireTime = Number(process.env.COOKIE_EXPIRE || 7) * 24 * 60 * 60 * 1000;
  const token = user.generateJsonWebToken();
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + expireTime
      ),
      httpOnly: true,
      secure:true,
      sameSite:"None"
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};