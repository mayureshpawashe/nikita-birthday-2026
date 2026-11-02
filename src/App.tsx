import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { birthday } from './content'

type WishStep = 'unlit' | 'lit' | 'blown'
type MusicStatus = 'starting' | 'playing' | 'paused' | 'blocked' | 'error'
type PhotoSelection = number | 'eyes' | null

const birthdayTime = new Date(birthday.date).getTime()
const birthdayPreview = new URLSearchParams(window.location.search).get('preview') === 'birthday'
const songUrl = `${import.meta.env.BASE_URL}audio/happy-birthday.mp3`
const timerNotes = [
  'Every sunrise brings your special day a little closer.',
  'The hours are collecting little pieces of birthday magic.',
  'Every minute is another reason to smile.',
  'Even the seconds are excited to celebrate you.',
]

function splitTime(milliseconds: number) {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000))
  return [
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]
}

function Confetti({ burst }: { burst: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 58 }, (_, index) => {
        const position = (index * 73.7) % 100
        const drift = ((index * 47) % 280) - 140
        const delay = ((index * 17) % 75) / 100
        const duration = 3.3 + ((index * 13) % 18) / 10
        const colors = ['#ffd7d5', '#fff2d6', '#a43f5d', '#efb777', '#ffffff']
        return {
          left: `${position}%`,
          backgroundColor: colors[index % colors.length],
          '--drift': `${drift}px`,
          '--delay': `${delay}s`,
          '--duration': `${duration}s`,
          '--spin': `${index % 2 ? 700 : -700}deg`,
        } as CSSProperties
      }),
    [],
  )

  if (burst === 0) return null

  return (
    <div className="confetti" key={burst} aria-hidden="true">
      {pieces.map((style, index) => (
        <span key={index} style={style} />
      ))}
    </div>
  )
}

function BirthdayConfetti() {
  const pieces = useMemo(
    () => Array.from({ length: 30 }, (_, index) => {
      const colors = ['#e5a66e', '#f8d2d4', '#a34765', '#f8e7c7', '#d98d9c']
      return {
        left: `${(index * 67.3) % 100}%`,
        backgroundColor: colors[index % colors.length],
        '--drift': `${((index * 41) % 150) - 75}px`,
        '--delay': `-${((index * 29) % 110) / 10}s`,
        '--duration': `${7 + ((index * 13) % 45) / 10}s`,
        '--spin': `${index % 2 ? 480 : -480}deg`,
      } as CSSProperties
    }),
    [],
  )

  return <div className="birthday-confetti" aria-hidden="true">{pieces.map((style, index) => <span key={index} style={style} />)}</div>
}

function LovePets() {
  const [loveCount, setLoveCount] = useState(0)

  return (
    <section className="love-pets-section section-pad" id="love-pets" aria-labelledby="love-pets-title">
      <div className="page-width pets-layout">
        <div className="pets-copy">
          <p className="eyebrow pink">03 / A LITTLE EXTRA LOVE</p>
          <h2 id="love-pets-title">Meet the<br /><em>love pets.</em></h2>
          <p>Two tiny companions with a very big job: delivering all the love they can carry to you.</p>
          <p className="pets-hint">Tap the cats and watch the love grow.</p>
        </div>
        <div className="pets-stage">
          <button className="pet-button" type="button" onClick={() => setLoveCount((count) => count + 1)} aria-label="Pet the two love cats">
            <span className={`pet-illustration ${loveCount > 0 ? 'is-cuddling' : ''}`} key={loveCount}>
              <svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <ellipse cx="260" cy="235" rx="218" ry="20" fill="#eac7c8" opacity=".48" />
                <g className="pet-left">
                  <path d="M124 200 C52 203 55 107 93 117 C65 126 82 168 131 163" fill="none" stroke="#a85d72" strokeWidth="18" strokeLinecap="round" />
                  <ellipse cx="173" cy="182" rx="75" ry="63" fill="#e6a8ae" stroke="#98536b" strokeWidth="4" />
                  <path d="M112 129 L119 54 L156 85 Q179 73 201 84 L239 52 L245 127 Q250 182 178 184 Q103 183 112 129Z" fill="#f3c6be" stroke="#98536b" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M125 70 L129 99 L148 90Z M228 69 L208 91 L231 99Z" fill="#da8796" />
                  <path d="M147 127 Q157 137 168 127 M194 127 Q204 137 215 127" fill="none" stroke="#6f4350" strokeWidth="4" strokeLinecap="round" />
                  <path d="M177 140 L186 140 L181 148Z" fill="#a8566d" />
                  <path d="M181 148 Q173 157 165 151 M181 148 Q189 157 197 151" fill="none" stroke="#6f4350" strokeWidth="3" strokeLinecap="round" />
                  <path d="M141 148 L113 145 M141 156 L110 160 M218 148 L246 145 M218 156 L248 160" stroke="#98536b" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="151" cy="155" rx="10" ry="5" fill="#e6a3a8" opacity=".8" /><ellipse cx="209" cy="155" rx="10" ry="5" fill="#e6a3a8" opacity=".8" />
                  <path d="M147 222 Q142 232 151 232 L165 232 M198 222 Q194 232 202 232 L216 232" fill="#f3c6be" stroke="#98536b" strokeWidth="3" />
                </g>
                <g className="pet-right" transform="translate(520 0) scale(-1 1)">
                  <path d="M124 200 C52 203 55 107 93 117 C65 126 82 168 131 163" fill="none" stroke="#a88776" strokeWidth="18" strokeLinecap="round" />
                  <ellipse cx="173" cy="182" rx="75" ry="63" fill="#e4d0bb" stroke="#947567" strokeWidth="4" />
                  <path d="M112 129 L119 54 L156 85 Q179 73 201 84 L239 52 L245 127 Q250 182 178 184 Q103 183 112 129Z" fill="#f7e3cf" stroke="#947567" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M125 70 L129 99 L148 90Z M228 69 L208 91 L231 99Z" fill="#e5b4ae" />
                  <path d="M147 127 Q157 137 168 127 M194 127 Q204 137 215 127" fill="none" stroke="#6f5550" strokeWidth="4" strokeLinecap="round" />
                  <path d="M177 140 L186 140 L181 148Z" fill="#c28489" />
                  <path d="M181 148 Q173 157 165 151 M181 148 Q189 157 197 151" fill="none" stroke="#6f5550" strokeWidth="3" strokeLinecap="round" />
                  <path d="M141 148 L113 145 M141 156 L110 160 M218 148 L246 145 M218 156 L248 160" stroke="#947567" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="151" cy="155" rx="10" ry="5" fill="#eabeb6" opacity=".8" /><ellipse cx="209" cy="155" rx="10" ry="5" fill="#eabeb6" opacity=".8" />
                  <path d="M147 222 Q142 232 151 232 L165 232 M198 222 Q194 232 202 232 L216 232" fill="#f7e3cf" stroke="#947567" strokeWidth="3" />
                </g>
                <path d="M260 96 C243 72 214 94 231 116 L260 143 L289 116 C306 94 277 72 260 96Z" fill="#bd687d" />
                <path d="M260 99 C251 86 238 95 243 105" fill="none" stroke="#e9a6b5" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {loveCount > 0 && <span className="pet-hearts" aria-hidden="true"><i>♥</i><i>♡</i><i>♥</i><i>♡</i><i>♥</i></span>}
            </span>
          </button>
          <div className="pets-status" role="status">{loveCount === 0 ? 'READY FOR A LITTLE LOVE?' : `${loveCount} ${loveCount === 1 ? 'HEART' : 'HEARTS'} SENT TO NIKITA ♥`}</div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [now, setNow] = useState(() => Date.now())
  const [partyStarted, setPartyStarted] = useState(false)
  const [wishStep, setWishStep] = useState<WishStep>(() => birthdayPreview || Date.now() >= birthdayTime ? 'lit' : 'unlit')
  const [letterOpen, setLetterOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoSelection>(null)
  const [burst, setBurst] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [timerNote, setTimerNote] = useState(0)
  const [musicStatus, setMusicStatus] = useState<MusicStatus>('starting')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const autoplayAttempted = useRef(false)
  const birthdayRevealTriggered = useRef(false)
  const isCelebrating = birthdayPreview || now >= birthdayTime

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isCelebrating) setWishStep('lit')
  }, [isCelebrating])

  useEffect(() => {
    if (!isCelebrating || birthdayRevealTriggered.current) return
    birthdayRevealTriggered.current = true
    setShowConfetti(true)
    setBurst((current) => current + 1)
  }, [isCelebrating])

  useEffect(() => {
    if (autoplayAttempted.current) return
    autoplayAttempted.current = true
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.6
    void audio.play().then(
      () => setMusicStatus('playing'),
      () => { if (audio.paused) setMusicStatus('blocked') },
    )
  }, [])

  useEffect(() => {
    if (musicStatus !== 'starting' && musicStatus !== 'blocked') return

    const startOnFirstInteraction = (event: Event) => {
      if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') return
      if (event.target instanceof Element && event.target.closest('.music-dock')) return
      const audio = audioRef.current
      if (!audio || !audio.paused) return
      void audio.play().then(
        () => setMusicStatus('playing'),
        () => { if (audio.paused) setMusicStatus('blocked') },
      )
    }

    document.addEventListener('click', startOnFirstInteraction)
    document.addEventListener('keydown', startOnFirstInteraction)
    return () => {
      document.removeEventListener('click', startOnFirstInteraction)
      document.removeEventListener('keydown', startOnFirstInteraction)
    }
  }, [musicStatus])

  useEffect(() => {
    if (burst === 0) return
    const timer = window.setTimeout(() => setShowConfetti(false), 5200)
    return () => window.clearTimeout(timer)
  }, [burst])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedPhoto !== null && !dialog.open) dialog.showModal()
    if (selectedPhoto === null && dialog.open) dialog.close()
  }, [selectedPhoto])

  useEffect(() => {
    if (!letterOpen) return
    const timer = window.setTimeout(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document.getElementById('birthday-letter')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
    }, 500)
    return () => window.clearTimeout(timer)
  }, [letterOpen])

  useEffect(() => {
    if (typeof selectedPhoto !== 'number') return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setSelectedPhoto((current) => (typeof current !== 'number' ? current : (current + 1) % birthday.photos.length))
      }
      if (event.key === 'ArrowLeft') {
        setSelectedPhoto((current) => (typeof current !== 'number' ? current : (current - 1 + birthday.photos.length) % birthday.photos.length))
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedPhoto])

  const isBeforeBirthday = !isCelebrating
  const isBirthday = birthdayPreview || (now >= birthdayTime && now < birthdayTime + 86400000)
  const units = splitTime(birthdayTime - now)
  const timerProgress = isBeforeBirthday
    ? [1 - Math.min(units[0], 30) / 30, 1 - units[1] / 24, 1 - units[2] / 60, 1 - units[3] / 60]
    : [1, 1, 1, 1]
  const celebrationHeading = isBeforeBirthday
    ? 'A little magic is on its way.'
    : isBirthday
      ? 'Today is your day, Nikita.'
      : 'Every day is worth celebrating you.'
  const displayedPhoto = selectedPhoto === 'eyes'
    ? { src: birthday.accentPhoto, alt: 'A close-up of Nikita’s whiskey-brown eyes', label: 'Whiskey eyes' }
    : selectedPhoto === null ? null : birthday.photos[selectedPhoto]

  const launchConfetti = () => {
    setShowConfetti(true)
    setBurst((current) => current + 1)
  }

  const playMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      await audio.play()
      setMusicStatus('playing')
    } catch {
      setMusicStatus('blocked')
    }
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) {
      audio.pause()
      setMusicStatus('paused')
    } else {
      void playMusic()
    }
  }

  const startParty = () => {
    if (audioRef.current?.paused && musicStatus !== 'error') void playMusic()
    setPartyStarted(true)
    launchConfetti()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('celebration')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  const handleWish = () => {
    if (wishStep === 'unlit') {
      setWishStep('lit')
    } else if (wishStep === 'lit') {
      setWishStep('blown')
      launchConfetti()
    } else {
      setWishStep('lit')
    }
  }

  return (
    <div className={`site-shell ${isCelebrating ? 'is-celebrating' : ''}`}>
      <audio ref={audioRef} src={songUrl} autoPlay loop preload="auto" onPlay={() => setMusicStatus('playing')} onPause={() => setMusicStatus('paused')} onError={() => setMusicStatus('error')} />
      {isCelebrating && <BirthdayConfetti />}
      {showConfetti && <Confetti burst={burst} />}

      {isCelebrating && <div className="birthday-live-badge"><span aria-hidden="true">✦</span><span>THE BIRTHDAY BASH IS ON</span><span aria-hidden="true">✦</span></div>}

      <button className={`music-dock ${musicStatus === 'playing' ? 'is-playing' : ''}`} type="button" onClick={toggleMusic} aria-label={musicStatus === 'playing' ? 'Pause birthday song' : 'Play birthday song'} disabled={musicStatus === 'error'}>
        <span className="music-disc" aria-hidden="true">♫</span>
        <span>{musicStatus === 'playing' ? 'Pause birthday song' : musicStatus === 'error' ? 'Song unavailable' : 'Play birthday song'}</span>
        <span className="music-bars" aria-hidden="true"><i /><i /><i /></span>
      </button>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="For Nikita, back to top">
          <span className="brand-mark" aria-hidden="true">N<span>♥</span></span>
          <span>FOR NIKITA</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#memories">The moments</a>
          <a href="#whiskey-eyes">Her eyes</a>
          <a href="#love-pets">Love pets</a>
          <a href="#celebration">The bash</a>
          <a href="#letter">The letter</a>
        </nav>
        <span className="header-date">25 · 11 · 26</span>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-backdrop" style={{ backgroundImage: `url(${birthday.backgroundPhoto})` }} aria-hidden="true" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> A BIRTHDAY LOVE STORY</p>
              <h1 id="hero-title">{isCelebrating ? <>Happy birthday, <em>my love.</em></> : <>For the girl who makes <em>everything</em> feel brighter.</>}</h1>
              <p className="hero-name">Nikita<span className="name-heart" aria-hidden="true">♡</span></p>
              <p className="hero-intro">{isCelebrating ? 'Every corner of this little universe is celebrating you.' : 'A little corner of the universe, made just to celebrate you.'}</p>

              {isBeforeBirthday ? <div className="countdown-panel" aria-label="Countdown to Nikita’s birthday">
                <div className="countdown-topline">
                  <span className="tiny-heart" aria-hidden="true">♥</span>
                  <span>LOVE IS IN THE COUNTDOWN</span>
                  <span className="countdown-zone">MIDNIGHT IST</span>
                </div>
                <p className="countdown-date">{birthday.dateLabel}</p>
                <div className="countdown-grid" role="group" aria-label="Time until Nikita’s birthday">
                  {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((unit, index) => (
                    <button className={`countdown-unit ${timerNote === index ? 'is-selected' : ''}`} type="button" key={unit} onClick={() => setTimerNote(index)} aria-label={`${units[index]} ${unit.toLowerCase()} remaining. Show a love note.`} aria-pressed={timerNote === index}>
                      <span className="timer-ring" style={{ '--timer-progress': `${Math.round(timerProgress[index] * 100)}%` } as CSSProperties}>
                        <span className="timer-core"><strong key={`${unit}-${units[index]}`}>{String(units[index]).padStart(2, '0')}</strong></span>
                      </span>
                      <span>{unit}</span>
                    </button>
                  ))}
                </div>
                <p className="countdown-caption" aria-live="polite">{timerNotes[timerNote]}</p>
                <p className="countdown-hint">TAP A CIRCLE FOR A LITTLE LOVE NOTE</p>
              </div> : <div className="birthday-arrived-card" aria-label="Nikita’s birthday celebration">
                <div className="birthday-arrived-top">
                  <div className="birthday-cake-art" aria-hidden="true"><span className="birthday-cake-flame" /><span className="birthday-cake-candle" /><span className="birthday-cake-frosting" /><span className="birthday-cake-layer" /><span className="birthday-cake-plate" /></div>
                  <div className="birthday-arrived-copy"><p>{now < birthdayTime ? 'A PEEK AT THE PARTY · 25 NOVEMBER' : 'THE COUNTDOWN IS OVER · 25 NOVEMBER'}</p><strong>Happy birthday, Nikita!</strong><span>Make a wish. The party is all yours.</span></div>
                </div>
                <div className="birthday-remaining" role="timer" aria-label="Time remaining until Nikita’s birthday" aria-live="off">
                  <p>{now < birthdayTime ? 'TIME LEFT TO 25 NOVEMBER · MIDNIGHT IST' : 'THE WAIT IS OVER'} <span aria-hidden="true">✦</span></p>
                  <div className="birthday-remaining-grid">
                    {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((unit, index) => (
                      <div className="birthday-remaining-unit" key={unit}>
                        <strong>{String(units[index]).padStart(2, '0')}</strong>
                        <small>{unit}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>}

              <button className="primary-button" type="button" onClick={startParty}>
                <span>{isCelebrating ? 'Make a birthday wish' : 'Start the birthday bash'}</span><span className="button-arrow" aria-hidden="true">↗</span>
              </button>
              <p className="hero-note">{isCelebrating ? 'Cake, confetti and love wherever you wander.' : 'A surprise you can open anytime · Best enjoyed with a smile'}</p>
              {(musicStatus === 'blocked' || musicStatus === 'paused') && <button className="hero-music-prompt" type="button" onClick={() => void playMusic()}>♫ Tap to play the birthday song</button>}
            </div>

            <div className="hero-art" aria-label="A portrait of Nikita">
              <span className="orbit orbit-one" aria-hidden="true" />
              <span className="orbit orbit-two" aria-hidden="true" />
              <div className="photo-frame hero-frame">
                <img src={birthday.heroPhoto} alt="Nikita smiling at a table" fetchPriority="high" />
              </div>
              <div className="hero-photo-tag"><span>✦</span> MY FAVOURITE PERSON</div>
              <div className="hero-side-note" aria-hidden="true">a day for you <span>♡</span></div>
              <div className="hero-sticker" aria-hidden="true"><span>25</span><small>NOV</small></div>
            </div>
          </div>
          <a className="scroll-cue" href="#memories">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </section>

        <section className="memories-section section-pad" id="memories" aria-labelledby="memories-title">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow pink">01 / THE LITTLE THINGS</p>
                <h2 id="memories-title">Five little frames.<br /><em>One big feeling.</em></h2>
              </div>
              <p>Because every version of you deserves its own place in the story. Tap a photo to see it up close.</p>
            </div>
            <div className="photo-grid">
              {birthday.photos.map((photo, index) => (
                <button className={`memory-card memory-card-${index + 1}`} type="button" key={photo.src} onClick={() => setSelectedPhoto(index)} aria-label={`Open photo ${index + 1}: ${photo.label}`}>
                  <div className="memory-image"><img src={photo.src} alt={photo.alt} loading="lazy" /></div>
                  <div className="memory-caption"><span>0{index + 1} / {photo.label}</span><span aria-hidden="true">↗</span></div>
                </button>
              ))}
            </div>
            <div className="memory-closing"><span aria-hidden="true">✳</span> Every photo says the same thing: you are wonderful.</div>
          </div>
        </section>

        <section className="eyes-section section-pad" id="whiskey-eyes" aria-labelledby="eyes-title">
          <div className="page-width eyes-layout">
            <div className="eyes-photo-wrap">
              <button className="eyes-photo" type="button" onClick={() => setSelectedPhoto('eyes')} aria-label="Open the full photo of Nikita’s whiskey-brown eyes">
                <img src={birthday.accentPhoto} alt="Nikita’s whiskey-brown eyes in a close-up photograph" loading="lazy" />
              </button>
              <div className="eyes-photo-caption"><span>THE EYES I COULD GET LOST IN</span><span>OPEN FULL PHOTO ↗</span></div>
            </div>
            <div className="eyes-copy">
              <p className="eyebrow light">02 / A POEM FOR YOUR EYES</p>
              <span className="eyes-ornament" aria-hidden="true">✧</span>
              <h2 id="eyes-title">Whiskey <em>eyes.</em></h2>
              <blockquote className="eyes-poem">
                <p>Your whiskey-brown eyes<br />hold the last of the light.<br />A little amber,<br />a little wonder,<br />a whole sky to get lost in.</p>
                <p>And when you look at me,<br />the world turns quiet.<br />My heart chooses you.</p>
              </blockquote>
              <p className="eyes-signature">For Nikita, always <span aria-hidden="true">♡</span></p>
            </div>
          </div>
        </section>

        <LovePets />

        <section className={`celebration-section section-pad ${partyStarted || isCelebrating ? 'is-partying' : ''}`} id="celebration" aria-labelledby="celebration-title">
          <div className="party-stars" aria-hidden="true">✦ <span>✧</span> ✦</div>
          <div className="balloon balloon-one" aria-hidden="true" /><div className="balloon balloon-two" aria-hidden="true" /><div className="balloon balloon-three" aria-hidden="true" />
          <div className="page-width party-layout">
            <div className="party-copy">
              <p className="eyebrow light">04 / THE BIRTHDAY BASH</p>
              <div className="party-banner">NIKITA’S BIRTHDAY BASH <span>♥</span> 25.11.26</div>
              <h2 id="celebration-title">{celebrationHeading}</h2>
              <p>This moment is yours. Light a candle, make a wish, and let the whole page celebrate with you.</p>
              <button className="outline-button" type="button" onClick={launchConfetti}>Shower the page in confetti <span aria-hidden="true">✦</span></button>
            </div>
            <div className="wish-card">
              <p className="wish-card-label">A LITTLE WISH FOR YOU</p>
              <div className={`cake-scene ${wishStep}`} aria-hidden="true">
                <div className="candle"><div className="flame" /><div className="smoke">〰</div></div>
                <div className="cake-top" /><div className="cake-middle" /><div className="cake-bottom" /><div className="cake-plate" />
                <span className="cake-spark cake-spark-one">✦</span><span className="cake-spark cake-spark-two">✧</span>
              </div>
              <h3>{wishStep === 'blown' ? 'Your wish is on its way.' : 'Make a wish, my love.'}</h3>
              <p>{wishStep === 'blown' ? 'May the year ahead be as lovely as your heart.' : 'There’s a little birthday magic in every candle.'}</p>
              <button className="wish-button" type="button" onClick={handleWish}>
                {wishStep === 'unlit' ? 'Light the candle' : wishStep === 'lit' ? 'Blow out the candle' : 'Make another wish'}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="letter-section section-pad" id="letter" aria-labelledby="letter-title">
          <div className="letter-backdrop" style={{ backgroundImage: `url(${birthday.backgroundPhoto})` }} aria-hidden="true" />
          <div className="page-width letter-layout">
            <div className="letter-intro">
              <p className="eyebrow pink">05 / JUST FOR YOU</p>
              <h2 id="letter-title">One last thing,<br /><em>sweetheart.</em></h2>
              <p>Some words are meant to be kept close. This little note is for you.</p>
            </div>
            <div className="letter-interaction">
              <button className={`envelope ${letterOpen ? 'opened' : ''}`} type="button" onClick={() => setLetterOpen((open) => !open)} aria-expanded={letterOpen} aria-controls="birthday-letter" aria-label={letterOpen ? 'Close the birthday letter' : 'Open the birthday letter'}>
                <span className="envelope-flap" /><span className="envelope-front" /><span className="envelope-seal">♥</span>
              </button>
              <button className="text-button" type="button" onClick={() => setLetterOpen((open) => !open)} aria-expanded={letterOpen} aria-controls="birthday-letter">{letterOpen ? 'Fold the letter' : 'Open your letter'} <span aria-hidden="true">↗</span></button>
            </div>
          </div>
          {letterOpen && (
            <div className="page-width">
              <article className="letter-paper" id="birthday-letter">
                <span className="letter-paper-decoration" aria-hidden="true">♡</span>
                {birthday.letter.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                <p className="signature">{birthday.signature}</p>
              </article>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner"><span>Made with love, for Nikita <span aria-hidden="true">♥</span></span><span>25 November 2026</span><a href="#top">Back to top ↑</a></div>
      </footer>

      <dialog className="photo-dialog" ref={dialogRef} onClose={() => setSelectedPhoto(null)} onClick={(event) => { if (event.target === dialogRef.current) setSelectedPhoto(null) }} aria-label="Photo viewer">
        {displayedPhoto && (
          <div className="dialog-content">
            <button className="dialog-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Close photo viewer">×</button>
            <img src={displayedPhoto.src} alt={displayedPhoto.alt} />
            <div className={`dialog-bottom ${selectedPhoto === 'eyes' ? 'single-photo' : ''}`}>
              {typeof selectedPhoto === 'number' ? <>
                <button type="button" onClick={() => setSelectedPhoto((selectedPhoto - 1 + birthday.photos.length) % birthday.photos.length)} aria-label="Previous photo">←</button>
                <span>{String(selectedPhoto + 1).padStart(2, '0')} / {String(birthday.photos.length).padStart(2, '0')} — {displayedPhoto.label}</span>
                <button type="button" onClick={() => setSelectedPhoto((selectedPhoto + 1) % birthday.photos.length)} aria-label="Next photo">→</button>
              </> : <span>{displayedPhoto.label}</span>}
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}

export default App
