import useMarkdownContext from '../context/MarkdownContext';

export default function Editor() {
  const { rawText, setRawText } = useMarkdownContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRawText(e.target.value);
  };

  return (
    <div className="stack h-full">
      <h2>Editor</h2>
      <textarea
        className="resize-none h-full bg-gray-100 rounded-md p-2 focus:ring-4 outline-none"
        value={rawText}
        onChange={handleChange}
      />
    </div>
  );
}
