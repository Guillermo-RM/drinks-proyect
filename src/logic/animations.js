import {gsap} from "gsap";

export function glassOscillation(ref) {
    const tl = gsap.timeline();
  
    tl.fromTo(
      ref,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  
    tl.set(ref, { opacity: 1 });
  
    tl.to(ref, {
      y: 18,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'Power1.inOut'
    });
}

export function lateralEntry (ref, lateral, time) {
    gsap.fromTo( ref, 
        {x: lateral },
        {x: 0, duration: time, ease: 'power1.out' })
}

export function verticalEntry (ref, vertical, time) {
  gsap.fromTo(ref, 
    {y: vertical},
    {y: 0, duration: time }
)}