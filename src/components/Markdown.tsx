import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type MarkdownProps = {
	className?: string;
	content: string;
	disablePlugins?: boolean;
};

export default function Markdown(props: MarkdownProps) {
	const { className = '', content, disablePlugins = false } = props;

	return (
		<ReactMarkdown className={className} children={content} {...(!disablePlugins && { remarkPlugins: [remarkGfm] })} />
	);
}
