/*
 * @Author: gaotian dc23byte@163.com
 * @Date: 2024-02-27 03:06:10
 * @LastEditors: gaotian dc23byte@163.com
 * @LastEditTime: 2024-02-27 05:09:41
 * @FilePath: /aBlog/data/projectsData.ts
 * @Description:
 */
interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '测评中心',
    description: `方便世界各个人员便捷自定义创建问卷及特定结果展示.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
