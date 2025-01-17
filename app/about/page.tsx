import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-3xl font-bold">আমার সম্পর্কে</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="w-48 h-48 relative">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic.jpg-df2A2Hg3I2pDK7SK659sXNMdczY5Ih.jpeg"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-4 text-left">
            <h2 className="text-2xl font-bold">আসসালামু আলাইকুম,</h2>
            <p className="text-gray-600 dark:text-gray-300">
              আমি ওমায়ের। জন্ম চাঁদপুরে, আমি ঢাকায় থাকি। আমি পড়তে ও লিখতে ভালোবাসি, এটাকে হোবি বললে হয়তো ভুল হবে লেখাকে আমার প্যাসন বলা যায়। আমার চিন্তা ও প্রশ্ন নিয়ে এই সাইটটি তৈরি করা হয়েছে। আমার লেখা কোনোভাবে উপক্রিত করতে পারলে তার সম্পুর্ন ক্রেডিট আল্লাহ সুবহানাহুয়া তায়ালার আর সকল ভুল নিতান্তই আমার। ওয়ামা তাওফিকি ইল্লাহ বিল্লাহ
            </p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">এই সাইটি কেনো?</h2>
          <ul className="space-y-2">
            <li>• পোস্ট গুলো সিরিয়ালি সাজানো</li>
            <li>• সুন্দর থিম</li>
            <li>• আলাদা আলাদা কেটাগরি</li>
            <li>• সকল কিছু এক যায়গায়</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">ওয়েবসাইট তৈরির কারন</h2>
          <p className="text-gray-600 dark:text-gray-300">
            ওয়েভ সাইটতি তৈরি করার অনেকগুলো কারন রয়েছে। তাদের মধ্যে উল্লেখ যোগ্য কিছু হলো;
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>• ফেসবুকের রেস্ট্রিক্সনের জন্য সব পোস্ট করা যায় না</li>
            <li>• পোস্ট গুলোর সুন্দর স্টাকচার এর জন্য</li>
            <li>• সিরিয়াল ও কেটাগরি মেইন্টেনের জন্য</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
