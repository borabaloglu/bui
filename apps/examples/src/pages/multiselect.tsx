import React from "react";

import { MultiSelect } from "@borabaloglu/ui";

const MultiselectExample = () => {
  const [value, setValue] = React.useState<string[]>([]);

  const frameworksList = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <div className="w-[300px]">
      <MultiSelect
        options={frameworksList}
        defaultValue={value}
        onValueChange={setValue}
        placeholder="Select options"
      />
    </div>
  );
};

export default MultiselectExample;
