export const generateRandomString = (minLength: number = 2, maxLength: number = 10) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' + '你好吗今天天气不错很高兴见到你中文字符测试123'

  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

  let randomString = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    randomString += charset[randomIndex]
  }

  return randomString
}
