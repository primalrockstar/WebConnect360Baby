# Component Documentation

## Button Component

### Props
- `children` (node): Button text/content
- `variant` (string): 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size` (string): 'small' | 'medium' | 'large' (default: 'medium')
- `onClick` (function): Click handler
- `disabled` (boolean): Disabled state (default: false)
- `fullWidth` (boolean): Full width button (default: false)
- `type` (string): Button type (default: 'button')

### Usage
```jsx
<Button variant="primary" size="large" onClick={handleClick}>
  Get Started
</Button>
```

## Card Component

### Props
- `children` (node): Card content
- `variant` (string): 'default' | 'highlight' | 'solid' (default: 'default')
- `hover` (boolean): Enable hover effect (default: false)
- `className` (string): Additional CSS classes

### Usage
```jsx
<Card variant="highlight" hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## SectionHeader Component

### Props
- `title` (string): Main heading text (required)
- `subtitle` (string): Optional subtitle above title
- `align` (string): 'center' | 'left' | 'right' (default: 'center')
- `className` (string): Additional CSS classes

### Usage
```jsx
<SectionHeader 
  subtitle="Our Features"
  title="Comprehensive Solutions"
  align="center"
/>
```

## PageContainer Component

### Props
- `children` (node): Page content
- `maxWidth` (string): 'small' | 'medium' | 'large' | 'full' (default: 'large')
- `className` (string): Additional CSS classes

### Usage
```jsx
<PageContainer maxWidth="medium">
  {/* Page content */}
</PageContainer>
```

## Navigation Component

No props required. Automatically handles routing and mobile menu.

### Usage
```jsx
<Navigation />
```

## CSS Variables

Global theme variables defined in `src/index.css`:

```css
--primary-teal: #00CED1
--primary-blue: #1E90FF
--dark-blue: #0A2540
--light-blue: #E0F7FA
--accent-cyan: #00E5FF
--background-dark: #0d1b2a
--text-light: #f0f4f8
```

## Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large Desktop: > 1024px
