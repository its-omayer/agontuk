import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">যোগাযোগ করুন</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          আপনার যেকোনো প্রশ্ন, মতামত বা সহযোগিতার জন্য আমার সাথে যোগাযোগ করুন
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 text-center space-y-4">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
            <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="font-bold">ইমেইল</h2>
          <p className="text-gray-600 dark:text-gray-300">bhuyinomayer@gmail.com</p>
        </Card>

        <Card className="p-6 text-center space-y-4">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
            <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="font-bold">ফোন</h2>
          <p className="text-gray-600 dark:text-gray-300">+880 1234-567890</p>
        </Card>

        <Card className="p-6 text-center space-y-4">
          <div className="mx-auto w-12 h-12 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20 rounded-full">
            <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="font-bold">ঠিকানা</h2>
          <p className="text-gray-600 dark:text-gray-300">ঢাকা, বাংলাদেশ</p>
        </Card>
      </div>

      <Card className="p-8">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">নাম</label>
              <Input required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">ইমেইল</label>
              <Input type="email" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">বিষয়</label>
            <Input required />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">বার্তা</label>
            <Textarea rows={6} required />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            পাঠিয়ে দিন
          </Button>
        </form>
      </Card>
    </div>
  )
}
