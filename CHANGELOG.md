# Changelog

## 2025-05-04
- Fixed critical iOS-specific display issues with hero image on iPhone
- Implemented specialized iOS Safari support using `-webkit-fill-available`
- Changed positioning method to use flexbox instead of absolute positioning for better iOS compatibility
- Adjusted gradient breakpoints to ensure text remains only in the bottom half
- Modified background-position to focus higher on the image (face area)
- Added iOS-specific media query using `@supports (-webkit-touch-callout: none)`
- Improved viewport handling to prevent layout issues on iOS Safari
- Updated hero content with more brand-focused messaging

## 2025-04-27
- Created `/content/blog/` directory for future blog content
- Added starter blog post: "Welcome to AI Forester"

## 2025-04-26
- Updated hero section with right-aligned text overlay to prevent covering the person in the image
- Modified gradient overlay to improve text readability while showing off the hero image
- Enhanced responsive design for mobile viewing
- Added clear call-to-action buttons with hover effects
