import { HTMLProps, useState } from 'react';
import reactLogo from './assets/react.svg';
import Editor from './components/Editor';
import Help from './components/Help';
import Preview from './components/Preview';

type IconButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'children'> & {
  src: string;
  size: number;
};

const IconButton = ({ src, size, ...props }: IconButtonProps) => {
  return (
    <button style={{ width: size }} {...props}>
      <img
        className="h-full w-full object-cover"
        src={src}
        alt={'toggle sync scrolls'}
      />
    </button>
  );
};

const App = () => {
  const toggleSyncedScroll = () => {};

  const printPreview = () => {};

  const resetEditorText = () => {};

  return (
    <div className="container h-full stack">
      <h1 className="text-4xl text-center">Markdown Preview</h1>
      <div className="flex my-4 justify-center gap-x-4">
        <IconButton
          onClick={toggleSyncedScroll}
          src={reactLogo}
          alt=""
          size={24}
        />
      </div>
      <div className="container flex h-full gap-4 px-2 justify-around overflow-x-hidden ">
        <div className="basis-full">
          <Editor />
        </div>
        <div className="basis-full overflow-x-auto ">
          <Preview />
        </div>
        <Help />
      </div>
    </div>
  );
};

export default App;
