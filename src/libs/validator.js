const validateStrategy = {
  //校验手机号码
  telephone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
  //校验非空字符
  notEmpty: /\S/,
  //匹配验证码（6位数字）
  msgCode: /^\d{6}$/,
};

const Validator = (strategyName) => {
  return (data) => {
    return validateStrategy[strategyName].test(data);
  }
}

export default Validator;