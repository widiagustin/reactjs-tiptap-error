import RichTextEditor from 'reactjs-tiptap-editor';
import { BaseKit } from 'reactjs-tiptap-editor/extension-bundle';

// Import CSS
import 'reactjs-tiptap-editor/style.css';

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {
      showOnlyCurrent: true,
    },

    // Character count
    characterCount: {
      limit: 50_000,
    },
  }),
  // Import Extensions Here
];

const DEFAULT = '';

export const Home = () => {
  const [content, setContent] = useState(DEFAULT);

  const onChangeContent = (value) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output='html'
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
};