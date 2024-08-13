# BUI

BUI is a React component library that is built with Radix UI, Shadcn and Tailwind CSS.

## Components

- Accordion
- Alert Dialog
- Alert
- Aspect Ratio
- Avatar
- Badge
- Breadcrumbs
- Button
- Calendar
- Card
- Carousel
- Checkbox
- Collapsible
- Combobox
- Command
- Context Menu
- Data Table
- Date Picker
- Drawer
- Dialog
- Dropdown Menu
- Form
- Hover Card
- Input OTP
- Input
- Menubar
- Multiselect
- Navigation Menu
- Pagination
- Phone Input
- Popover
- Progress
- Radio Group
- Scroll Area
- Select
- Separator
- Sheet
- Skeleton
- Slider
- Sonner
- Sortable
- Steps
- Switch
- Table
- Tabs
- Tag Input
- Textarea
- Toggle
- Toggle Group
- Tooltip

## How to Install

```bash
npm install @borabaloglu/ui
```

## How to Use

### Set your brand colors in your root css file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --global-brand-10: #f6f5ff;
  --global-brand-100: #0f0a29;
  --global-brand-20: #e2e0f6;
  --global-brand-30: #c6c1ec;
  --global-brand-40: #9e95e1;
  --global-brand-50: #8076db;
  --global-brand-60: #7765e2;
  --global-brand-70: #5e50ac;
  --global-brand-80: #40357c;
  --global-brand-90: #251f47;
}
```

### Import css in your _app.tsx file

```jsx
import '@borabaloglu/ui/main.dark.css'; // or import '@borabaloglu/ui/main.light.css';
import 'path/to/your/root.css';
```

### Setup your tailwind config

The following is an example. Please update it according to your needs.

```ts
import { tailwindDark } from "@borabaloglu/ui"; // or import { tailwindLight } from "@borabaloglu/ui";
import { join } from "path";
import { Config } from "tailwindcss";

import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "{src,pages,components,app}/**/*!(*.stories|*.spec).{js,ts,jsx,tsx,mdx}",
    join(__dirname, "../../node_modules/@borabaloglu/ui/dist/*"),
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        xxl: "0px",
      },
      animation: {
        "ease-in-quad": "cubic-bezier(.55, .085, .68, .53)",
        "ease-in-cubic": "cubic-bezier(.550, .055, .675, .19)",
        "ease-in-quart": "cubic-bezier(.895, .03, .685, .22)",
        "ease-in-quint": "cubic-bezier(.755, .05, .855, .06)",
        "ease-in-expo": "cubic-bezier(.95, .05, .795, .035)",
        "ease-in-circ": "cubic-bezier(.6, .04, .98, .335)",

        "ease-out-quad": "cubic-bezier(.25, .46, .45, .94)",
        "ease-out-cubic": "cubic-bezier(.215, .61, .355, 1)",
        "ease-out-quart": "cubic-bezier(.165, .84, .44, 1)",
        "ease-out-quint": "cubic-bezier(.23, 1, .32, 1)",
        "ease-out-expo": "cubic-bezier(.19, 1, .22, 1)",
        "ease-out-circ": "cubic-bezier(.075, .82, .165, 1)",

        "ease-in-out-quad": "cubic-bezier(.455, .03, .515, .955)",
        "ease-in-out-cubic": "cubic-bezier(.645, .045, .355, 1)",
        "ease-in-out-quart": "cubic-bezier(.77, 0, .175, 1)",
        "ease-in-out-quint": "cubic-bezier(.86, 0, .07, 1)",
        "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
        "ease-in-out-circ": "cubic-bezier(.785, .135, .15, .86)",
      },
    },
  },
  plugins: [tailwindAnimate, tailwindDark.config],
};

export default config;
```

### Ready

It's ready to use. You can check apps/examples for more details.

## Support

For any questions, please contact me at baloglub@gmail.com or open an issue.
