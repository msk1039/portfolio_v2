"use client"

import { Maximize, Minimize, Play, RotateCcw, Volume2, VolumeX } from "lucide-react"
import React, { useRef,useState } from "react"
import ReactPlayer from "react-player"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface VideoDialogProps {
  videoUrl: string
  trigger: React.ReactNode
}

export default function VideoDialog({ videoUrl, trigger }: VideoDialogProps) {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [fullscreen, setFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const playerRef = useRef<ReactPlayer>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleMute = () => {
    setMuted(!muted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value))
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value)
    setProgress(newProgress)
    if (playerRef.current) {
      playerRef.current.seekTo(newProgress)
    }
  }

  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    setProgress(state.played)
    setCurrentTime(state.playedSeconds)
  }

  const handleDuration = (duration: number) => {
    setDuration(duration)
  }

  const handleFullscreen = async () => {
    if (!containerRef.current) return

    try {
      if (!fullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        }
      }
    } catch (error) {
      console.warn("Fullscreen not supported or failed:", error)
    }
  }

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0)
      setProgress(0)
      setCurrentTime(0)
      setPlaying(true)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Listen for fullscreen changes
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full h-[80vh] p-0 bg-black border border-gray-300">
        <div
          ref={containerRef}
          className="relative w-full h-full bg-black rounded-lg overflow-hidden"
        >
          {/* Video Player */}
          <div className="relative w-full h-full">
            <ReactPlayer
              ref={playerRef}
              url={videoUrl}
              playing={playing}
              muted={muted}
              volume={volume}
              width="100%"
              height="100%"
              onProgress={handleProgress}
              onDuration={handleDuration}
              onEnded={() => setPlaying(false)}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
          </div>

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/70 mt-1 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePlayPause}
                  className="text-white hover:bg-white/20 p-2 border border-white/30 font-mono"
                >
                  {playing ? (
                    <div className="w-4 h-4 flex gap-1">
                      <div className="w-1 h-4 bg-white"></div>
                      <div className="w-1 h-4 bg-white"></div>
                    </div>
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                </Button>

                {/* Restart */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRestart}
                  className="text-white hover:bg-white/20 p-2 border border-white/30 font-mono"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>

                {/* Volume Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMute}
                    className="text-white hover:bg-white/20 p-2 border border-white/30 font-mono"
                  >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={muted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>
              </div>

              {/* Right side controls */}
              <div className="flex items-center gap-2">
                {/* Fullscreen */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFullscreen}
                  className="text-white hover:bg-white/20 p-2 border border-white/30 font-mono"
                >
                  {fullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Close button */}
          {/* {!fullscreen && (
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/30 bg-black/50 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#f0883e] focus:ring-offset-2 ring-offset-black font-mono"
            >
              <span className="sr-only">Close</span>
              <span className="text-lg font-mono">×</span>
            </Button>
          )} */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
