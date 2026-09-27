// ============================================
// APP ANIMATIONS
// ============================================
// All Angular animations are defined here.
// Import specific animations into any component.
//
// WHY Angular Animations instead of pure CSS?
// - They can be triggered programmatically
// - They respond to component state changes
// - They have a clean JavaScript API
// - They support staggered animations on lists

import {
  animate,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

// ─────────────────────────────────────────────
// REUSABLE ANIMATION DEFINITIONS
// These are building blocks used in triggers below
// ─────────────────────────────────────────────

/** Basic fade in animation */
export const fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}',
    style({ opacity: 1 })
  )
], {
  params: { duration: '0.6s', easing: 'ease' }
});

/** Slide up and fade in */
export const fadeInUpAnimation = animation([
  style({ opacity: 0, transform: 'translateY({{ distance }})' }),
  animate('{{ duration }} {{ easing }}',
    style({ opacity: 1, transform: 'translateY(0)' })
  )
], {
  params: {
    duration: '0.7s',
    distance: '40px',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
});

/** Slide in from the left */
export const slideInLeftAnimation = animation([
  style({ opacity: 0, transform: 'translateX(-60px)' }),
  animate('{{ duration }} {{ easing }}',
    style({ opacity: 1, transform: 'translateX(0)' })
  )
], {
  params: {
    duration: '0.8s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
});

/** Slide in from the right */
export const slideInRightAnimation = animation([
  style({ opacity: 0, transform: 'translateX(60px)' }),
  animate('{{ duration }} {{ easing }}',
    style({ opacity: 1, transform: 'translateX(0)' })
  )
], {
  params: {
    duration: '0.8s',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
});

/** Scale in */
export const scaleInAnimation = animation([
  style({ opacity: 0, transform: 'scale(0.85)' }),
  animate('{{ duration }} {{ easing }}',
    style({ opacity: 1, transform: 'scale(1)' })
  )
], {
  params: {
    duration: '0.6s',
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  }
});

// ─────────────────────────────────────────────
// ANIMATION TRIGGERS
// Applied directly to DOM elements in templates:
// [@fadeIn] or [@slideUp]
// ─────────────────────────────────────────────

/** Simple fade in on component enter */
export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    useAnimation(fadeInAnimation)
  ])
]);

/** Fade in + slide up on enter */
export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  transition(':enter', [
    useAnimation(fadeInUpAnimation)
  ])
]);

/** Slide in from left on enter */
export const slideInLeft: AnimationTriggerMetadata = trigger('slideInLeft', [
  transition(':enter', [
    useAnimation(slideInLeftAnimation)
  ])
]);

/** Slide in from right on enter */
export const slideInRight: AnimationTriggerMetadata = trigger('slideInRight', [
  transition(':enter', [
    useAnimation(slideInRightAnimation)
  ])
]);

/** Scale in on enter */
export const scaleIn: AnimationTriggerMetadata = trigger('scaleIn', [
  transition(':enter', [
    useAnimation(scaleInAnimation)
  ])
]);

/**
 * HERO ANIMATION
 * Sequences hero content: first the title, then subtitle, then buttons
 * This creates a cinematic "reveal" effect
 */
export const heroAnimation: AnimationTriggerMetadata = trigger('heroAnimation', [
  transition(':enter', [
    sequence([
      // Label first
      query('.hero-label', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s 0.2s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),

      // Title second
      query('.hero-title', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.7s 0.3s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),

      // Subtitle third
      query('.hero-subtitle', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s 0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),

      // Buttons last
      query('.hero-actions', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s 0.7s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);

/**
 * STAGGER ANIMATION
 * For lists of cards — they appear one after another
 * with a slight delay between each (stagger effect)
 */
export const staggerCards: AnimationTriggerMetadata = trigger('staggerCards', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(40px)' }),
      stagger('80ms', [
        animate(
          '0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
]);

/**
 * CARD HOVER ANIMATION (state-based)
 * The card has a 'default' and 'hovered' state
 * Use in template: [@cardHover]="isHovered ? 'hovered' : 'default'"
 */
export const cardHover: AnimationTriggerMetadata = trigger('cardHover', [
  state('default', style({
    transform: 'translateY(0) scale(1)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)'
  })),
  state('hovered', style({
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: '0 16px 64px rgba(0, 0, 0, 0.24)'
  })),
  transition('default <=> hovered', [
    animate('0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
  ])
]);

/**
 * COUNTER ANIMATION
 * For the stats section animated counters
 * The value property controls the display
 */
export const counterAnimation: AnimationTriggerMetadata = trigger('counterAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

/**
 * ROUTE TRANSITION ANIMATION
 * Smooth fade when navigating between pages
 */
export const routeAnimation: AnimationTriggerMetadata = trigger('routeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%', top: 0, left: 0 })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('0.25s ease', style({ opacity: 0, transform: 'translateX(-20px)' }))
      ], { optional: true }),

      query(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('0.35s 0.1s ease', style({ opacity: 1, transform: 'translateX(0)' }))
      ], { optional: true })
    ])
  ])
]);

/**
 * SLIDE DOWN (for mobile menu)
 */
export const slideDown: AnimationTriggerMetadata = trigger('slideDown', [
  transition(':enter', [
    style({ height: 0, opacity: 0, overflow: 'hidden' }),
    animate('0.3s ease', style({ height: '*', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('0.3s ease', style({ height: 0, opacity: 0 }))
  ])
]);

/**
 * FLOAT ANIMATION
 * For decorative elements (hero background elements, etc.)
 */
export const floatAnimation: AnimationTriggerMetadata = trigger('floatAnimation', [
  transition(':enter', [
    animate(
      '3s ease-in-out infinite',
      keyframes([
        style({ transform: 'translateY(0px)', offset: 0 }),
        style({ transform: 'translateY(-12px)', offset: 0.5 }),
        style({ transform: 'translateY(0px)', offset: 1 })
      ])
    )
  ])
]);
