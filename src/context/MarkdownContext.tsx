import React, { createContext, useContext, useState } from 'react';

type MarkdownContextProps = {
  rawText: string;
  setRawText: (value: string) => void;
};

const DEFAULT_TEXT = `# Markdown Previewer
## About

This app uses [\`marked\`](#) to translate strings into markdown. It was built on [\`vite\`](#) and [\`React\`](#).

Check the top bar for ease-of-use if you aren't aware how markdown is written.

**Press** the button at the bottom to open a panel featuring the markdown syntax.
`;

const MarkdownContext = createContext<MarkdownContextProps | null>(null);

export const MarkdownContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rawText, setRawText] = useState<string>(DEFAULT_TEXT);

  const value = {
    rawText,
    setRawText,
  };

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default function useMarkdownContext() {
  return useContext(MarkdownContext) as MarkdownContextProps;
}
