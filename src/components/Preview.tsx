import useMarkdownContext from '../context/MarkdownContext';
import { marked } from 'marked';
import '../Preview.css';

export default function Preview() {
  const { rawText } = useMarkdownContext();

  return (
    <div className="container stack overflow-x-hidden">
      <h2>Preview</h2>
      <div
        className="preview p-2 rounded-md bg-slate-100 container break-words"
        dangerouslySetInnerHTML={{ __html: marked.parse(rawText) }}
      />
    </div>
  );
}
