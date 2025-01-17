'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, CircleStopIcon as Stop } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface TextToSpeechProps {
  text: string;
}

export function TextToSpeech({ text }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('male');
  const synth = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synth.current = window.speechSynthesis;

      const u = new SpeechSynthesisUtterance(text);
      setUtterance(u);

      const loadVoices = () => {
        const voices = synth.current?.getVoices() || [];
        const bangladeshiVoice = voices.find(
          (v) => v.lang === 'bn-BD' && v.name.toLowerCase().includes(voiceGender)
        );
        setVoice(bangladeshiVoice || voices[0]); // Default to the first available voice
      };

      if (synth.current.onvoiceschanged !== null) {
        synth.current.onvoiceschanged = loadVoices;
      }
      loadVoices(); // Load voices explicitly

      return () => {
        synth.current?.cancel();
      };
    }
  }, [text, voiceGender]);

  useEffect(() => {
    if (utterance && voice) {
      utterance.voice = voice;
      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onend = () => setIsPlaying(false); // Reset state when playback ends
    }
  }, [utterance, voice, rate, pitch]);

  const handleTogglePlay = () => {
    if (!text.trim()) {
      alert('Text is empty. Please provide text to speak.');
      return;
    }

    if (synth.current && utterance) {
      if (isPlaying) {
        synth.current.pause();
      } else {
        if (synth.current.speaking && synth.current.paused) {
          synth.current.resume();
        } else {
          utterance.text = text; // Update text in case it changed
          synth.current.speak(utterance);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (synth.current) {
      synth.current.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="space-y-4 my-4">
      <div className="flex items-center space-x-2">
        <Button onClick={handleTogglePlay} size="sm">
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={handleStop} size="sm">
          <Stop className="w-4 h-4 mr-2" />
          Stop
        </Button>
        <Select
          value={voiceGender}
          onValueChange={(value: 'male' | 'female') => setVoiceGender(value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select voice" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-20">Speed:</span>
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            value={[rate]}
            onValueChange={([value]) => setRate(value)}
            className="w-48"
          />
          <span className="ml-2">{rate.toFixed(1)}x</span>
        </div>
        <div className="flex items-center">
          <span className="w-20">Pitch:</span>
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            value={[pitch]}
            onValueChange={([value]) => setPitch(value)}
            className="w-48"
          />
          <span className="ml-2">{pitch.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default TextToSpeech;
