'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface TranslatorProps {
  text: string
}

export function Translator({ text }: TranslatorProps) {
  const [translatedText, setTranslatedText] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('en')

  const handleTranslate = async () => {
    // In a real-world scenario, you would call a translation API here
    // For this example, we'll just simulate a translation
    setTranslatedText(`Translated text to ${targetLanguage}: ${text.slice(0, 50)}...`)
  }

  return (
    <div className="space-y-4 my-4">
      <div className="flex items-center space-x-2">
        <Select
          value={targetLanguage}
          onValueChange={(value) => setTargetLanguage(value)}
        >
          <Select.Trigger className="w-[180px]">
            <Select.Value placeholder="Select language" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="en">English</Select.Item>
            <Select.Item value="hi">Hindi</Select.Item>
            <Select.Item value="ar">Arabic</Select.Item>
          </Select.Content>
        </Select>
        <Button onClick={handleTranslate}>Translate</Button>
      </div>
      {translatedText && (
        <Textarea
          value={translatedText}
          readOnly
          rows={5}
          className="w-full"
        />
      )}
    </div>
  )
}
