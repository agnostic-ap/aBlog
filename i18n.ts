/*
 * @Author: gaotian dc23byte@163.com
 * @Date: 2024-03-04 05:29:00
 * @LastEditors: gaotian dc23byte@163.com
 * @LastEditTime: 2024-03-04 05:50:28
 * @FilePath: /aBlog/i18n.ts
 * @Description:
 */
// import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en']

export default getRequestConfig(async ({ locale = 'en' }) => {
  // Validate that the incoming `locale` parameter is valid
  console.log('locale：', locale)
  // if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/en.json`)).default,
  }
})
