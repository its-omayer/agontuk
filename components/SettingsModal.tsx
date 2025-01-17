'use client'

import { useSettings } from '@/contexts/SettingsContext'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { X } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { motion, AnimatePresence } from 'framer-motion'

export function SettingsModal() {
  const { isSettingsOpen, setIsSettingsOpen, settings, updateSettings } = useSettings()

  if (!isSettingsOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{ backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic.jpg-zNxV5VEq3oZk7ElHShFYJ3BgOY6fRk.jpeg)' }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="relative flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-[300px] p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">সেটিংস</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSettingsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2">থিম</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={settings.theme === 'auto' ? 'default' : 'outline'}
                      onClick={() => updateSettings({ theme: 'auto' })}
                      className="w-full"
                    >
                      AUTO
                    </Button>
                    <Button
                      variant={settings.theme === 'light' ? 'default' : 'outline'}
                      onClick={() => updateSettings({ theme: 'light' })}
                      className="w-full"
                    >
                      LIGHT
                    </Button>
                    <Button
                      variant={settings.theme === 'dark' ? 'default' : 'outline'}
                      onClick={() => updateSettings({ theme: 'dark' })}
                      className="w-full"
                    >
                      DARK
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2">ফন্ট</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'noto-sans', label: 'নোটো সান্স' },
                      { value: 'hind-siliguri', label: 'হিন্দ সিলিগুড়ি' },
                      { value: 'atma', label: 'আত্মা' },
                      { value: 'galada', label: 'গলাদা' },
                    ].map(font => (
                      <Button
                        key={font.value}
                        variant={settings.font === font.value ? 'default' : 'outline'}
                        onClick={() => updateSettings({ font: font.value as any })}
                        className={`w-full font-${font.value}`}
                      >
                        {font.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2">ফন্টের আকার</h3>
                  <Slider
                    value={[settings.fontSize || 16]}
                    onValueChange={([value]) => updateSettings({ fontSize: value })}
                    min={12}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-center mt-2 text-sm">
                    {settings.fontSize || 16}px
                  </div>
                </div>

                <div className="bg-purple-50/50 dark:bg-purple-900/20 p-3 rounded-lg text-sm">
                  <p>Auto: changes theme according to browser time.</p>
                  <p>5PM to 7AM -{'>'} DARK</p>
                  <p>7:01AM to 4:59PM -{'>'} LIGHT</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
