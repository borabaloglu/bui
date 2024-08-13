import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  TagInput,
  Tag,
  toast,
} from "@borabaloglu/ui";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const FormSchema = z.object({
  topics: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

const TagInputExample = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [tags, setTags] = React.useState<Tag[]>([
    {
      id: `1`,
      text: "React",
    },
    {
      id: `2`,
      text: "TypeScript",
    },
    {
      id: `3`,
      text: "GraphQL",
    },
    {
      id: `4`,
      text: "Tailwind CSS",
    },
  ]);

  const { setValue } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col items-start"
      >
        <FormField
          control={form.control}
          name="topics"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="text-left">Topics</FormLabel>
              <FormControl className="w-full">
                <TagInput
                  {...field}
                  placeholder="Enter a topic"
                  tags={tags}
                  variant="primary"
                  disabled
                  size="sm"
                  className="sm:min-w-[450px]"
                  onTagClick={(tag) => {
                    setTags((prevTags) =>
                      prevTags.filter((prevTag) => prevTag.id !== tag.id)
                    );
                    setValue(
                      "topics",
                      tags.filter((prevTag) => prevTag.id !== tag.id) as [
                        Tag,
                        ...Tag[],
                      ]
                    );
                  }}
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue("topics", newTags as [Tag, ...Tag[]]);
                  }}
                />
              </FormControl>
              <FormDescription className="text-left">
                These are the topics that you&apos;re interested in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default TagInputExample;
