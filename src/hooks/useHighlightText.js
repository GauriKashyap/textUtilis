import { useEffect, useState } from 'react'

const useHighlightText = (ref) => {
    const [highlightedText, setHighlightedText] = useState('');

    const handleClearHighlightedText = () => setHighlightedText('');

    useEffect(() => {
        document.onmouseup = () => {
            const input = ref.current;
            const highlightedText = input.value.substr(input.selectionStart, input.selectionEnd - input.selectionStart)
            setHighlightedText(highlightedText);
        };
    }, [ref]);

    return {
        highlightedText,
        onClearHighlightedText: handleClearHighlightedText,
    };
}

export default useHighlightText;