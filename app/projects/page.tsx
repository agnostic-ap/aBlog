/*
 * @Author: gaotian dc23byte@163.com
 * @Date: 2024-02-27 03:06:10
 * @LastEditors: gaotian dc23byte@163.com
 * @LastEditTime: 2024-03-23 13:42:42
 * @FilePath: /aBlog/app/projects/page.tsx
 * @Description:
 */
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            项目集
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* Showcase your projects with a hero image (16 x 9) */}
            这里是一些项目展示
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
