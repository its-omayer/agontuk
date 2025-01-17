import { Card } from '@/components/ui/card'
import Link from 'next/link'

const categories = [
  { name: 'ইতিহাস', count: 45 },
  { name: 'পাশ্চাত্য', count: 32 },
  { name: 'ভবিষ্যতের সম্ভাবনা', count: 28 },
  { name: 'ইসলামী দর্শন', count: 36 },
  { name: 'সমকালীন বিষয়', count: 52 },
]

export default function CategoryPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">ক্যাটাগরি</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name}`}
            className="group"
          >
            <Card className="p-6 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
              <h3 className="text-xl font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {category.count} লেখা
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
