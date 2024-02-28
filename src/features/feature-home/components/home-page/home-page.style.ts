import {
  alignItems,
  backgroundColor,
  classnames,
  display,
  flex,
  flexDirection,
  gap,
  justifyContent,
  minHeight,
  padding,
  textAlign,
} from 'tailwindcss-classnames';

export const homePageContainerStyle = classnames(
  minHeight('min-h-full'),
  display('flex'),
  flexDirection('flex-col'),
  backgroundColor('dark:bg-gray-900'),
);

export const homePageInnerStyle = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  justifyContent('justify-center', 'md:justify-start'),
  textAlign('text-center'),
  gap('gap-y-8'),
  flex('flex-1'),
  padding('px-6', 'pb-10'),
);
