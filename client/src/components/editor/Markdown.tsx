import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
    noteContent: string;
}

function Markdown({noteContent}: MarkdownProps) {
    return (
        <div className='prose border-2 p-4' >
            <ReactMarkdown>
                {noteContent}
            </ReactMarkdown>
        </div>
    )
}

export default Markdown
