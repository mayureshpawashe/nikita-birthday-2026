const image = (number: number) => `${import.meta.env.BASE_URL}images/nikita-${String(number).padStart(2, '0')}.webp`

export const birthday = {
  name: 'Nikita',
  date: '2026-11-25T00:00:00+05:30',
  dateLabel: '25 NOVEMBER 2026',
  heroPhoto: image(3),
  backgroundPhoto: image(5),
  accentPhoto: image(2),
  photos: [
    { src: image(1), alt: 'Nikita smiling in warm evening light', label: 'A little sunshine' },
    { src: image(3), alt: 'Nikita smiling at a table', label: 'The sweetest smile' },
    { src: image(4), alt: 'Nikita smiling with her chin resting on her hand', label: 'A quiet moment' },
    { src: image(5), alt: 'Nikita beside the water at sunset', label: 'Golden hour' },
    { src: image(6), alt: 'Nikita in a green sari', label: 'Simply lovely' },
  ],
  letter: [
    'Nikita,',
    'Some people have a way of making the ordinary feel beautiful. You do that just by being yourself.',
    'On your birthday, I hope you feel as loved, celebrated, and cherished as you deserve. May this new chapter bring you gentle moments, big dreams, and a thousand reasons to smile.',
    'I’m so glad the world has you in it. Happy birthday, my love.',
  ],
  signature: 'With all my love ♡',
}
