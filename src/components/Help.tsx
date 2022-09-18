import { marked } from 'marked';
import { useRef, useState } from 'react';

const snippets = [
  '*italic*',
  '_also italic_',
  '**bold**',
  '__also bold__',
  '~strikethrough~',
  '# Heading 1',
  'Also H1\n====================',
  '## Heading 2',
  'Also H2\n====================',
  '### Heading 3',
  '#### Heading 4',
  '##### Heading 5',
  '###### Heading 6',
  '`code`',
  '```multi-line code```',
  '[link name](youtube.com)',
  `1. First item
    1. First sub-item
2. Second item
3. Third item
  `,
  `* Wake Up
* Go To Bathroom
  * Take A Shower
  * Brush Teeth
* Get a nice breakfast
  `,
];

const Snippet = ({ children }: { children: string }) => {
  const thisRef = useRef<HTMLInputElement>(null);
  const handleClick = async () => {
    thisRef.current!.select();
    document.execCommand('copy');
    thisRef.current!.blur();
  };

  return (
    <div
      className="cursor-pointer rounded-md p-2 bg-slate-700 h-full text-white"
      onClick={handleClick}
    >
      <pre className="bg-slate-900 rounded-lg p-2">
        <code className="">{children}</code>
      </pre>
      <span
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(children) }}
      />
      <input className="hidden" ref={thisRef} value={children} />
    </div>
  );
};

export default function Help() {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <div
        className={`fixed transition ease-in bottom-0 w-full bg-slate-200 stack ${
          show ? 'h-[22rem]' : ''
        }`}
      >
        <button
          className={`${
            show ? 'py-2' : 'py-3'
          } w-full font-medium hover:bg-teal-300 bg-teal-500`}
          onClick={toggleShow}
        >
          {show ? 'Collapse' : 'Expand'}
        </button>
        <div className={`${!show ? 'hidden' : ''}`}>
          <div className="sticky">
            <p className="text-center text-lg">
              Click the card to copy the markdown snippet
            </p>
            <hr className="border-black my-1" />
          </div>
          <ul className="grid grid-cols-3 h-64 overflow-y-auto px-2 gap-x-1 gap-y-2 ">
            {snippets.map((snippet, index) => (
              <li key={index}>
                <Snippet>{snippet}</Snippet>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
