// 验证非空
const IsNotEmpty = function(input) {
  if (input !== '') {
    return true;
  }
  return false;
};

// 验证数字(double类型) [可以包含负号和小数点]
const IsNumber = function(input) {
  const regex = /^-?\d+$|^(-?\d+)(\.\d+)?$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};
// 验证整数
const IsInteger = function(input) {
  const regex = /^-?\d+$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};
// 验证正数
const IsPositiveNumber = function(num) {
  const reg = /^\d+(?=\.{0,1}\d+$|$)/;
  if (reg.test(num)) return true;
  return false;
};
// 验证非负整数
const IsIntegerNotNagtive = function(input) {
  const regex = /^\d+$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};
// 验证正整数
const IsIntegerPositive = function(input) {
  const regex = /^[0-9]*[1-9][0-9]*$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};
// 验证小数
const IsDecimal = function(input) {
  const regex = /^([-+]?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*)$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证只包含英文字母
const IsEnglishCharacter = function(input) {
  const regex = /^[A-Za-z]+$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证只包含数字和英文字母
const IsIntegerAndEnglishCharacter = function(input) {
  const regex = /^[0-9A-Za-z]+$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证只包含汉字
const IsChineseCharacter = function(input) {
  const regex = /^[\u4e00-\u9fa5]+$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证数字长度范围（数字前端的0计长度）[若要验证固定长度，可传入相同的两个长度数值]
const IsIntegerLength = function(input, lengthBegin, lengthEnd) {
  const pattern = `^\\d{${lengthBegin},${lengthEnd}}$`;
  const regex = new RegExp(pattern);
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证字符串包含内容
const IsStringInclude = function(input, withEnglishCharacter, withNumber, withChineseCharacter) {
  if (!withEnglishCharacter && !withNumber && !withChineseCharacter) {
    return false; // 如果英文字母、数字和汉字都没有，则返回false
  }
  let pattern = '^[';
  if (withEnglishCharacter) {
    pattern += 'a-zA-Z';
  }
  if (withNumber) {
    pattern += '0-9';
  }
  if (withChineseCharacter) {
    pattern += '\\u4E00-\\u9FA5';
  }
  pattern += ']+$';
  const regex = new RegExp(pattern);
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证字符串长度范围 [若要验证固定长度，可传入相同的两个长度数值]
const IsStringLength = function(input, LengthBegin, LengthEnd) {
  const pattern = `^.{${LengthBegin},${LengthEnd}}$`;
  const regex = new RegExp(pattern);
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证字符串长度范围（字符串内只包含数字和/或英文字母）[若要验证固定长度，可传入相同的两个长度数值]
const IsStringLengthOnlyNumberAndEnglishCharacter = function(input, LengthBegin, LengthEnd) {
  const pattern = `^[0-9a-zA-z]{${LengthBegin},${LengthEnd}}$`;
  const regex = new RegExp(pattern);
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证字符串长度范围 [若要验证固定长度，可传入相同的两个长度数值]
const IsStringLengthByInclude = function(
  input,
  withEnglishCharacter,
  withNumber,
  withChineseCharacter,
  lengthBegin,
  lengthEnd
) {
  if (!withEnglishCharacter && !withNumber && !withChineseCharacter) {
    return false; // 如果英文字母、数字和汉字都没有，则返回false
  }
  let pattern = '^[';
  if (withEnglishCharacter) {
    pattern += 'a-zA-Z';
  }
  if (withNumber) {
    pattern += '0-9';
  }
  if (withChineseCharacter) {
    pattern += '\\u4E00-\\u9FA5';
  }
  pattern += `]{${lengthBegin},${lengthEnd}}$`;
  const regex = new RegExp(pattern);
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证字符串字节数长度范围 [若要验证固定长度，可传入相同的两个长度数值；每个汉字为两个字节长度]
const IsStringByteLength = function(input, lengthBegin, lengthEnd) {
  const regex = /[^\\x00-\xff]/g;
  const byteLength = input.replace(regex, 'ok').length;
  if (byteLength >= lengthBegin && byteLength <= lengthEnd) {
    return true;
  }
  return false;
};

// 验证日期 [只能验证日期，不能验证时间]
const IsDateTime = function(input) {
  if (Date.parse(input)) {
    return true;
  }
  return false;
};

// 验证固定电话号码 [3位或4位区号；区号可以用小括号括起来；区号可以省略；区号与本地号间可以用减号或空格隔开；可以有3位数的分机号，分机号前要加减号]
const IsTelePhoneNumber = function(input) {
  const regex = /^(((0\d2|0\d{2})[- ]?)?\d{8}|((0\d3|0\d{3})[- ]?)?\d{7})(-\d{3})?$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证手机号码 [可匹配"(+86)013325656352"，括号可以省略，+号可以省略，(+86)可以省略，11位手机号前的0可以省略；11位手机号第二位数可以是3、4、5、8中的任意一个]
const IsMobilePhoneNumber = function(input) {
  const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证电话号码（可以是固定电话号码或手机号码）
const IsPhoneNumber = function(input) {
  const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$|^(((0\d2|0\d{2})[- ]?)?\d{8}|((0\d3|0\d{3})[- ]?)?\d{7})(-\d{3})?$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证邮政编码
const IsZipCode = function(input) {
  const regex = /^\d{6}$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证电子邮箱 [@字符前可以包含字母、数字、下划线和点号；@字符后可以包含字母、数字、下划线和点号；@字符后至少包含一个点号且点号不能是最后一个字符；最后一个点号后只能是字母或数字]
const IsEmail = function(input) {
  // 邮箱名以数字或字母开头；邮箱名可由字母、数字、点号、减号、下划线组成；邮箱名（@前的字符）长度为3～18个字符；邮箱名不能以点号、减号或下划线结尾；不能出现连续两个或两个以上的点号、减号。
  const regex = /^([\w-\\.]+)@([\w-\\.]+)(\.[a-zA-Z0-9]+)$/;
  if (input.match(regex)) {
    return true;
  }
  return false;
};

// 验证网址（可以匹配IPv4地址但没对IPv4地址进行格式验证；IPv6暂时没做匹配）[允许省略"://"；可以添加端口号；允许层级；允许传参；域名中至少一个点号且此点号前要有内容]
const IsURL = function(input) {
  // 每级域名由字母、数字和减号构成（第一个字母不能是减号），不区分大小写，单个域长度不超过63，完整的域名全长不超过256个字符。
  // 在DNS系统中，全名是以一个点“.”来结束的，例如“www.nit.edu.cn.”。没有最后的那个点则表示一个相对地址。
  // 没有例如"http://"的前缀，没有传参的匹配
  // var regex = /^([0-9a-zA-Z][0-9a-zA-Z-]{0,62}\.)+([0-9a-zA-Z][0-9a-zA-Z-]{0,62})\.?$/;
  // var regex = /^(((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp)://)|(www\.))+(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(/[a-zA-Z0-9\&%_\./-~-]*)?$/;
  const regex = /^([a-zA-Z]+:\/\/)?([\w-\\.]+)(\.[a-zA-Z0-9]+)(:\d{0,5})?\/?([\w-\\/]*)\.?([a-zA-Z]*)\??(([\w-]*=[\w%]*&?)*)$/;
  return regex.test(input);
};

// 验证IP（可以匹配ip或ip:pord）
const IsIpAddress = function(ip) {
  const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  const reg2 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
  return reg.test(ip) || reg2.test(ip);
};

export {
  IsIpAddress,
  IsPositiveNumber,
  IsNotEmpty, // 验证非空
  IsNumber, // 验证数字(double类型) [可以包含负号和小数点]
  IsInteger, // 验证整数
  IsIntegerNotNagtive, // 验证非负整数
  IsStringLength,
  IsStringLengthOnlyNumberAndEnglishCharacter,
  IsStringLengthByInclude,
  IsStringByteLength,
  IsDateTime,
  IsTelePhoneNumber,
  IsMobilePhoneNumber,
  IsPhoneNumber,
  IsZipCode,
  IsEmail,
  IsURL,
  IsIntegerPositive,
  IsDecimal,
  IsEnglishCharacter,
  IsIntegerAndEnglishCharacter,
  IsChineseCharacter,
  IsIntegerLength,
  IsStringInclude
};
