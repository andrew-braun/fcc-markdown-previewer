function App() {
	const [markdownText, setMarkdownText] = React.useState(
		initialMarkdownPlaceholder
	);

	function handleEditorChange(event) {
		setMarkdownText(event.target.value);
	}

	return (
		<React.Fragment>
			<Editor onChange={handleEditorChange} editorText={markdownText} />
			<Preview previewText={markdownText} />
		</React.Fragment>
	);
}

function Editor(props) {
	const { onChange, editorText } = props;

	return (
		<div className="editor__container">
			<div className="editor__heading">
				<h2>Editor</h2>
				<a
					href="https://docs.github.com/en/free-pro-team@latest/github/writing-on-github/basic-writing-and-formatting-syntax"
					target="_blank"
					className="button"
				>
					Markdown Guide
				</a>
			</div>
			<textarea
				className="editor"
				id="editor"
				type="text"
				onChange={onChange}
				value={editorText}
			></textarea>
		</div>
	);
}

function Preview(props) {
	marked.setOptions({
		breaks: true,
	});

	const { previewText } = props;
	const previewHTML = marked(previewText);

	return (
		<div className="preview__container">
			<div className="preview__heading">
				<h2>Preview</h2>
			</div>
			<div
				className="preview"
				id="preview"
				dangerouslySetInnerHTML={{ __html: previewHTML }}
			></div>
		</div>
	);
}

const initialMarkdownPlaceholder = `# Heading 1: \\# text

## Heading 2: \\## text

**Bold text**: \\*\\*text\\*\\*

[Link](https://andrewbraun.dev): \\[Text\\]\\(https://link.link\)

\`\`\`javascript
const codeArray = ["This", "is", "a", "code", "block"]
console.log(codeArray.join(""))
\`\`\`

\`const thisCodeElement = "inline-code"\`

* List Item 1
* List Item 2

> This is a blockquote

![Random synthwave picture](https://image.freepik.com/free-vector/synthwave-night-city-background_126980-167.jpg)
`;

ReactDOM.render(<App />, document.querySelector("#main-container"));
